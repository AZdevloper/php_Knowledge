import React from "react";
import { useState, createContext } from "react";
import HorizontalLinearStepper from "./component/Common/HorizontalLinearStepper";
import Content from "./component/Content/Content";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

export const STEP_GET_STARTED = "step_get_started";
export const STEP_QUIZ_QUESTIONS = "step_quiz_questions";
export const STEP_RESULT = "step_result";

export const GlobalContext = createContext();
export const CorrectAnswerContext = createContext();

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [step, setStep] = useState(STEP_GET_STARTED);
  const [numberOfCorrectAnswer, setNumberOfCorrectAnswer] = useState(0);
  const [username, setUserName] = useState(null);

  
  const stepContext = {
    step,
    setStep,
    numberOfCorrectAnswer,
    setNumberOfCorrectAnswer,
    activeStep,
    setActiveStep,
    username,
    setUserName,
  };

  return (
    <GlobalContext.Provider value={stepContext}>
      <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100%] ">
        <Header />
        <div className="  flex justify-center items-center flex-col p-5 w-[80%] mr-auto ml-auto">
          <HorizontalLinearStepper />
          <div className="">
            <Content />
          </div>
        </div>

        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
