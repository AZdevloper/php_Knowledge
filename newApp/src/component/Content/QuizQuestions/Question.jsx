import React from "react";

function Question(props) {
  const questionText = props.questionText;

  return <div className="p-2 w-full font-bold flex justify-center">{questionText}</div>;
}

export default Question;
