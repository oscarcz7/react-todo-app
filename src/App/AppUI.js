import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../ToDoSearch";
import { TodoList } from "../ToDoList";
import { TodoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateTodoButton";

function AppUI({
  completed,
  total,
  searchValue,
  setSearchValue,
  searched,
  completeToDo,
  deleteToDo,
}) {
  return (
    <React.Fragment>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
