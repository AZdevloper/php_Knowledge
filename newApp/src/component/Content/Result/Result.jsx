import React, { useContext } from "react";
import { GlobalContext } from "../../../App";

function Result() {
  const {  numberOfCorrectAnswer } = useContext(GlobalContext);
  return (
    <div class="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <span> icon valid </span>
      <p>your Quez has been submited </p>
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
  );
}

export default Result
