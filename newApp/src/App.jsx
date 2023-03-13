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

  
  const stepContext = {
    step,
    setStep,
    numberOfCorrectAnswer,
    setNumberOfCorrectAnswer,
    activeStep,
    setActiveStep,
  };

  return (
    <GlobalContext.Provider value={stepContext}>
      <div className="App  ">
        <Header />
        <div className="flex justify-center items-center flex-col p-5 w-[80%] mr-auto ml-auto">
            <div className="w-[100%]">
              <HorizontalLinearStepper />
            </div>
            <Content />
        </div>

        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
