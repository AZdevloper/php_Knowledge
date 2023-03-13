import React from "react";
import Button from "@mui/material/Button";

function Choice(props) {
  const choiceText = props.choiceText;
  const onChoiceClick = props.onChoiceClick;
  return (
    <div className="p-1 w-full">
      <Button
        onClick={onChoiceClick}
        variant="contained"
        color={props.color}
        className="w-full"
        disabled={props.status}
      >
        {choiceText}
      </Button>
    </div>
  );
}

export default Choice;
