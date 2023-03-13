import React, { useContext,  } from "react";
import GetStarted from "./GetStarted/GetStarted";
import { STEP_GET_STARTED, STEP_RESULT, STEP_QUIZ_QUESTIONS, GlobalContext } from "../../App";
import QuizQuestions from "./QuizQuestions/QuizQuestions";
import Result from "./Result/Result";


function Content() {
    const { step, setStep, setActiveStep } = useContext(GlobalContext);
 
    
      if (step == STEP_GET_STARTED) {
        // setActiveStep(1);
        return <GetStarted />;
      } else if (step == STEP_QUIZ_QUESTIONS) {
        setActiveStep(1);
        return <QuizQuestions />;
      } else if (step == STEP_RESULT) {
        setActiveStep(2);
        setActiveStep(3);

        return <Result />;
      }
}

export default Content;
