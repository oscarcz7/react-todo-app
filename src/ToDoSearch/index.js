import React from "react";
import "./TodoSearch.css";
import { ToDoContext } from "../ToDoContext";
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(ToDoContext);
  //const [searchValue, setSearchValue] = React.useState(""); // Using the react state

  const onSearchValueChanged = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      <input
        className="TodoSearch"
        placeholder="Activity"
        value={searchValue}
        onChange={onSearchValueChanged}
      ></input>
    </React.Fragment>
  );
}
export { TodoSearch };
