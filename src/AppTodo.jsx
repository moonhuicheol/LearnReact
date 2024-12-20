import "./App.css";

import TodoList from "./components/todo/TodoList";
import AddTodo from "./components/todo/AddTodo";

import { TodoProvider } from "./context/TodoContext";
import { useEffect } from "react";

function AppTodo() {
  console.log("start");

  console.log("end");
  return (
    <TodoProvider>
      <h2>할일목록</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default AppTodo;
