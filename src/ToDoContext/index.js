import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const ToDoContext = React.createContext();

function ToDoProvider(props) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("ToDos_V1", []); // this is using the custom hook
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
    saveToDos(newArray);
  };

  // function to delete
  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((t) => t.text === text);
    const newArray = [...toDos];
    newArray.splice(toDoIndex, 1);
    saveToDos(newArray);
  };

  //React.useEffect(() => {}, []); //the array let us pass when this effect need to be render, without it all time start to render

  return (
    <ToDoContext.Provider value={{
      loading,
      error,
      completed,
      total,
      searchValue,
      setSearchValue,
      searched,
      completeToDo,
      deleteToDo
    }}>{props.children}</ToDoContext.Provider>
  );
}

export {ToDoContext, ToDoProvider}
