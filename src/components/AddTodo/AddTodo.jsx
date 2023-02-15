import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { add } from "../../redux/modules/toDoData";

const AddTodo = ({ onAdd }) => {
  const id = uuidv4();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    detail: "",
    status: false,
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title.trim().length === 0 || todo.detail.trim().length === 0)
      return;
    dispatch(add({ ...todo, id }));

    setTodo({
      id: uuidv4(),
      title: "",
      detail: "",
      status: false,
    });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>제목 : </Title>
        <Input
          className="inputTitle"
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <Title>내용 : </Title>
        <Input
          className="inputDetail"
          type="text"
          name="detail"
          value={todo.detail}
          onChange={onChangeHandler}
        />
        <AddBtn
          className="inputBtn"
          onClick={(e) => {
            if (todo.title === "" || todo.detail === "") {
              e.preventDefault();
              alert("빈칸 없이 입력해주세요");
            }
          }}
        >
          추가하기
        </AddBtn>
      </Form>
    </>
  );
};
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.label`
  font-size: 20px;
  font-weight: 600;
`;
const Input = styled.input`
  margin: 0 50px 0 10px;
  width: 13vw;
  height: 20px;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
`;

const AddBtn = styled.button`
  padding: 10px;
  border: 2px solid black;
  background-color: transparent;
  font-size: 16px;
  font-family: "Jua", sans-serif;
  cursor: pointer;
  :hover {
    color: white;
    background-color: black;
  }
`;
export default AddTodo;
