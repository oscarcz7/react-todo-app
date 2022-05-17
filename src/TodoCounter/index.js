import React from "react";
import "./TodoCounter.css";
import { ToDoContext } from "../ToDoContext";

function TodoCounter() {
  const { total, completed } = React.useContext(ToDoContext)
  // return <h1 style={styles}>THIS IS A TITLE</h1>;
  return (
    <h2 className="TodoCounter">
      Completed {completed} of {total} tasks
    </h2>
  );
}

//export default TodoCounter;
export { TodoCounter };
