import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.scss";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      detail: "리액트 기초를 공부해봅시다.",
      status: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      detail: "리액트 기초를 공부해봅시다.",
      status: true,
    },
  ]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((e) => (e.id === updated.id ? updated : e)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((e) => e.id !== deleted.id));
  };
  return (
    <section className="innerContainer">
      <AddTodo onAdd={handleAdd} />
      <div className="workingTodoInner">
        <h2>Working.. 🔥</h2>
        <ul className="lists">
          {todos.map((todo) => {
            if (!todo.status) {
              return (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                />
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
      <div className="doneTodoInner">
        <h2>Done..! 🎉</h2>
        <ul className="lists">
          {todos.map((todo) => {
            if (todo.status) {
              return (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                />
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
      <div className="allTodoInner">
        <h2>All to Do 💧</h2>
        <ul className="lists">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
