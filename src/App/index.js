import React from "react";
import { ToDoProvider } from "../ToDoContext";
import { AppUI } from "./AppUI";

function App() {
  return (
    //invisible tag React.Fragment

    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
