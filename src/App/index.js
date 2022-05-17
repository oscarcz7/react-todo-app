import React from "react";
import { AppUI } from "./AppUI";

const defaultToDos = [
  { text: "Terminar curso de React", completed: false },
  { text: "Desplegar Catering", completed: true },
  { text: "Tomar 5 vasos de Agua", completed: true },
  { text: "Comprar switch", completed: false },
];

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);

  const [searchValue, setSearchValue] = React.useState(""); // this state send to todoSearch.js

  // This is for the counter component
  const completed = toDos.filter((t) => !!t.completed).length;
  const total = toDos.length;

  // This part is for the search values
  let searched = [];

  if (!searchValue.length >= 1) {
    // if nothing matches display the whole array
    searched = toDos;
  } else {
    //if something matches analyze the incidences and resolve the matches to return
    searched = toDos.filter((t) => {
      const todoText = t.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // function to mark as completed

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex((t) => t.text === text);
    const newArray = [...toDos];
    newArray[toDoIndex].completed = true;
    setToDos(newArray);
  };

  // function to delete
  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((t) => t.text === text);
    const newArray = [...toDos];
    newArray.splice(toDoIndex, 1);
    setToDos(newArray);
  };
  return (
    //invisible tag React.Fragment
    <AppUI
      completed={completed}
      total={total}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searched={searched}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;
