import React, { useContext } from "react";
import { Input } from "../../Common/Input";
import { logo, pcImg } from "../../../assets";
import Button from "@mui/material/Button";
import {
  STEP_GET_STARTED,
  STEP_QUIZ_QUESTIONS,
  STEP_RESULT,
  GlobalContext,
} from "../../../App";


function GetStarted() {
  const { step, setStep, setUserName } = useContext(GlobalContext);
  const handleInputChange = (event) => {
        setUserName(event.target.value);
      };
  return (
    <div className="flex   items-center h-[100vh] justify-around">
      <div className="ml-20">
        <p className="font-poppins w-[70%] lg:w-[60%] sm:w-[60%] ">
          Welcome to PHP Quizizz! Practice and improve your PHP skills with our
          resources and challenges. Contact us if you need any assistance. We're
          here to help you succeed as a developer
        </p>
        <div className="flex items-center mt-5 justify-center p-2">
          <Input onChange={handleInputChange} />
          <Button
            onClick={() => setStep(STEP_QUIZ_QUESTIONS)}
            variant="contained"
            color="info"
            className="w-20 mr-5"
          >
            start
          </Button>
        </div>
      </div>
      <img
        src={pcImg}
        className="hidden sm:block w-[60%] h-[60%]"
        alt=""
        srcset=""
      />
    </div>
  );
}

export default GetStarted;
