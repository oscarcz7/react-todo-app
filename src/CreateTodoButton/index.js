import React from "react";
import './CreateTodoButton.css'
function CreateToDoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("This is a message")}
    >
      +
    </button>
  );
}
export { CreateToDoButton };
