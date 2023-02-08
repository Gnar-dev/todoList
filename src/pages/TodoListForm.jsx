import React from "react";
import Header from "../components/header/Header";
import TodoList from "../components/TodoList/TodoList";
const TodoListForm = () => {
  return (
    <div className="layout">
      <Header />
      <TodoList />
    </div>
  );
};

export default TodoListForm;
