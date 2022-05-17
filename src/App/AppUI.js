import React from "react";
import { ToDoContext } from "../ToDoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../ToDoSearch";
import { TodoList } from "../ToDoList";
import { TodoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateTodoButton";

function AppUI() {
  const { error, loading, searched, completeToDo, deleteToDo } =
    React.useContext(ToDoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <h1>LOADING</h1>}
        {error && <h1>Error</h1>}
        {!loading && !searched.length && <h1>Creat your first task</h1>}
        {searched.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}
export { AppUI };
