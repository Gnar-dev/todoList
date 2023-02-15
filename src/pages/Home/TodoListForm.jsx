import React from "react";
import Header from "../../components/header/Header";
import TodoList from "../../components/TodoList/TodoList";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  border: 2px solid black;
  height: 98vh;
  font-family: "Jua", sans-serif;
`;

const TodoListForm = () => {
  return (
    <Layout>
      <Header />
      <TodoList />
    </Layout>
  );
};

export default TodoListForm;
