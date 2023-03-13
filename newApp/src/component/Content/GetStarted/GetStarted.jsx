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
sruct

function GetStarted() {
  const { step, setStep } = useContext(GlobalContext);

  return (
    <div className="w-full">
      <div className="flex  justify-center items-center">
        <div className="ml-20">
          <p className="font-poppins w-[70%] lg:w-[60%] sm:w-[60%] ">
            Welcome to PHP Quizizz! Practice and improve your PHP skills with
            our resources and challenges. Contact us if you need any assistance.
            We're here to help you succeed as a developer
          </p>
          <div className="flex items-center mt-5">
            <Input />
            <Button
              onClick={() => setStep(STEP_QUIZ_QUESTIONS)}
              variant="contained"
              color="info"
            >
              Contained
            </Button>
          </div>
        </div>
        {/* <div
          className="w-[500px] h-[500px]"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: ` url(${pcImg})`,
           
           
            
          }}
        ></div> */}
        <img src={pcImg} className="  w-[60%] h-[60%]" alt="" srcset="" />
      </div>
    </div>
  );
}

// function During({ onEnd }) {
//   const [count ,setCount] = useState(0);
//   const  setCountHandler = ()=>{
//    setCount(count + 1);
//   }
//   // setTimeout(setCountHandler(), 1000);
//   return (
//     <div className=" w-full h-[100vh] flex items-center justify-center">
//       <div className="w-[50%] flex flex-col items-center   ">
//         <div>
//           <span>counter :{count} s </span>
//         </div>
//         <div>
//           <h1>{questions[0].question}</h1>
//         </div>
//         <div>
//           <div>
//             <button onClick={setCountHandler}>{questions[0].choice1}</button>
//           </div>
//           <div>
//             <button>{questions[0].choice2}</button>
//           </div>
//           <div>
//             <button>{questions[0].choice3}</button>
//           </div>
//           <div>
//             <button>{questions[0].choice4}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// function End() {
//   return (
//     <div>
//       <h1>End Component</h1>
//     </div>
//   );
// }
// function GetStarted() {
//   const [component, setComponent] = useState("start");

//     function handleStart() {
//       setComponent("during");
//     }

//     function handleEnd() {
//       setComponent("end");
//     }

//     if (component === "start") {
//       return <Start onStart={handleStart} />;
//     } else if (component === "during") {
//       return <During onEnd={handleEnd} />;
//     } else {
//       return <End />;
//     }

//   // const [showQuestion, setShowQuestion] = useState(false);
//   // let Info = () => {
//   //   console.log("hide inf");
//   //   setShowInfo(false);
//   //    setShowQuestion(true);

//   // };

//   // let Question = () => {
//   //   console.log("showed question ");
//   //   setShowQuestion(false);

//   // };
//   // if(showInfo){
//     //     return (
//     //       <div className="flex  justify-center items-center">
//     //         <div className="ml-20">
//     //           <div className="w-[70%] lg:w-[50%]">
//     //             <p className="font-poppins">
//     //               Welcome to PHP Quizizz! Practice and improve your PHP skills
//     //               with our resources and challenges. Contact us if you need any
//     //               assistance. We're here to help you succeed as a developer
//     //             </p>
//     //           </div>
//     //           <div className="flex items-center">
//     //             <Input />
//     //             <button onClick={Info} className="btn">
//     //               {"start "}

//     //             </button>
//     //           </div>
//     //         </div>

//     //         <img src={pcImg} alt="" srcset="" />
//     //       </div>
//     //     );
//   //   // } else return null;
//   // if(showQuestion){
//   //   return(
//   //     <div>
//   //      <div class="row g-5 d-none  flex-column justify-content-center align-items-center w-50 h-75 p-1 rounded-3 text-center answers"
//   //       id="quetion_contenaire">
//   //       <div class=" col-13  m-2 d-flex  align-items-center" id="Timer_down_container">
//   //         <div id="" class="per_progresbar">
//   //           <p > Timer Down: </p>
//   //           <span id="Timer_down"> </span>
//   //         </div>
//   //       </div>
//   //       <div class=" col-13  m-2 d-flex  align-items-center" id="myProgress">
//   //         <div id="myBar">
//   //           <p  id="per_progresbar"></p>
//   //         </div>
//   //       </div>
//   //       <div class="col-11 h-10 p-2 quation">
//   //         <h1 id="question_id"></h1>
//   //       </div>
//   //       <div class="col-11 p-0  answers">
//   //         <div class="row justify-content-around  " id="answers_container">
//   //           <div class="col-5 ">
//   //             <div class="row g-4 flex-column ">
//   //               <div class=" col p-1  rounded-pill text-center d-flex answers_item ">

//   //                 <button class="btn rounded-pill  w-100" id="answer1"></button>
//   //               </div>
//   //               <div class="col  p-1  rounded-pill text-center d-flex respons_item answers_item ">

//   //                 <button class="btn rounded-pill  w-100" id="answer2"></button>
//   //               </div>
//   //             </div>
//   //           </div>
//   //           <div class="col-5 ">
//   //             <div class="row g-4 flex-column ">

//   //               <div class="col p-1  rounded-pill text-center d-flex answers_item">

//   //                 <button class="btn rounded-pill  w-100" id="answer3"></button>
//   //               </div>
//   //               <div class="col  p-1  rounded-pill text-center d-flex  answers_item" id="k2">

//   //                 <button class="btn rounded-pill  w-100" id="answer4"></button>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //     </div>

//   //   );
//   // }

// }

export default GetStarted;
