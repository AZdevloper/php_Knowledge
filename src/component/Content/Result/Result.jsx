import React, { useContext } from "react";
import { GlobalContext } from "../../../App";
import { quizData } from "../../../quizData";
import {star} from "../../../assets/index"
function Result() {
  const { numberOfCorrectAnswer, username } = useContext(GlobalContext);
  const correct = Math.floor(quizData.length / numberOfCorrectAnswer / 5);
  // const numberOfCorrectAnswers = 5; // replace this with the actual number of correct answers

const stars = [];
for (let i = 0; i < correct; i++) {
  stars.push(<img src={star} className="w-5 h-5 mr-2" />);
}
  return (
    <div className=" h-[100vh] mt-10">
      <div class="flex   items-center  flex-col  max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <span> icon valid </span>
        <div className="flex">{stars}</div>
        <p> <b>{username} </b> your Quez has been submited </p>
        <p class="font-bold">Score Card</p>
        <div class="p-5 card flex border border-gray-600 rounded-lg ">
          <div class="p-3 flex flex-col justify-center items-center ">
            <span class="bg-green-500  rounded-full w-10 h-10  flex items-center justify-center  drop-shadow-[7px_3px_4px_#62cc3a] ">
              {numberOfCorrectAnswer}
            </span>
            <p class="text-center">correct answer</p>
          </div>
          <div class="p-3 flex flex-col justify-center items-center ">
            <span class="bg-[#393f37]  rounded-full w-10 h-10  flex items-center justify-center  drop-shadow-[7px_3px_4px_#393f37]">
              {10}
            </span>
            <p class="text-center">total Question</p>
          </div>
          <div class="p-3 flex flex-col justify-center items-center ">
            <span class="bg-[#b4572b] rounded-full w-10 h-10  flex items-center justify-center  drop-shadow-[7px_3px_4px_#b4572b]">
              {10 - numberOfCorrectAnswer}
            </span>
            <p class="text-center">wrong answers</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 font-mono hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-full text-sm px-5 mt-2 py-2.5 text-center mr-2 mb-2"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result
