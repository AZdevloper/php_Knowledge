import React, { useEffect, useState, useContext, useRef } from "react";
import Counter from "./Counter";
import Question from "./Question";
import { quizData } from "../../../quizData";
import Choice from "./Choice";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import {
  STEP_GET_STARTED,
  STEP_RESULT,
  STEP_QUIZ_QUESTIONS,
  GlobalContext,
} from "../../../App";
import { formatNumber } from "../../../Utils";

function QuizQuestions() {
  const { step, setStep, setNumberOfCorrectAnswer, setUserName } = useContext(GlobalContext);
  const [quizIndex, setQuizIndex] = useState(0);
  const [color, setColor] = useState("info");
  const countdownRef = useRef(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [status, setStatus] = useState(false);


  useEffect(() => {
    setSelectedChoice(null);
    setStatus(false);
    if (quizIndex >= quizData.length) {
      // Go to result page
      setStep(STEP_RESULT);
    }
  }, [quizIndex]);

  let quiz = quizData[quizIndex];

  const incrementNumberOfCorrectAnswer = () => {
    setNumberOfCorrectAnswer((prev) => prev + 1);
  };
  const onChoiceClickedHandler = (choice) => {
      setSelectedChoice(choice);
      setStatus(true);

    if (choice == quizData[quizIndex].answer) {
      setColor("success")
      incrementNumberOfCorrectAnswer();

    }else{
      setColor("error");

    }
    if (quizIndex < quizData.length) {
      setTimeout(()=>{
        setQuizIndex((prev) => prev + 1);
      },2*1000) 
    } else {
      //TODO: Go to result page
    }
  };
  const onTimeOutHandler = () => {
    const countdownApi = countdownRef.current;
    countdownApi.start();

    if (quizIndex < quizData.length) {
      setQuizIndex((prev) => prev + 1);
    } else {
      //TODO: Go to result page
    }
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>time out </span>;
    } else {
      // Render a countdown
      return (
        <span>
          {formatNumber(minutes)}:{formatNumber(seconds)}
        </span>
      );
    }
  };
  
  

  if (quizIndex < quizData.length) {
    return (
      <div className=" w-full h-[100vh] flex items-center justify-center">
        <div className="w-[50%] flex flex-col items-center   ">
          {/* <Counter duration={number} /> */}

          <Countdown
            ref={countdownRef}
            date={Date.now() + 10 * 1000}
            onComplete={onTimeOutHandler}
            autoStart={true}
            renderer={renderer}
          />

          <Question questionText={quiz.question} />

          <Choice
            onChoiceClick={() => onChoiceClickedHandler(1)}
            choiceText={quiz.choice1}
            color={selectedChoice === 1 ? color : "info"}
            status={selectedChoice === 1 ? !status : status}
          />

          <Choice
            onChoiceClick={() => onChoiceClickedHandler(2)}
            choiceText={quiz.choice2}
            color={selectedChoice === 2 ? color : "info"}
            status={selectedChoice === 2 ? !status : status}
          />
          <Choice
            onChoiceClick={() => onChoiceClickedHandler(3)}
            choiceText={quiz.choice3}
            color={selectedChoice === 3 ? color : "info"}
            status={selectedChoice === 3 ? !status : status}
          />
          <Choice
            onChoiceClick={() => onChoiceClickedHandler(4)}
            choiceText={quiz.choice4}
            color={selectedChoice === 4 ? color : "info"}
            status={selectedChoice === 4 ? !status : status}
          />
        </div>
      </div>
    );
  } else {
    // setStep(STEP_RESULT);
    return null;
  }
}

export default QuizQuestions;
