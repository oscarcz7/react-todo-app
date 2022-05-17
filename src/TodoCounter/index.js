import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  // return <h1 style={styles}>THIS IS A TITLE</h1>;
  return (
    <h2 className="TodoCounter">
      Completed {completed} of {total} tasks
    </h2>
  );
}

//export default TodoCounter;
export { TodoCounter };
