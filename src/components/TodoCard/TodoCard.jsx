import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove, toggle } from "./../../redux/modules/toDoData";
import styled from "styled-components";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(remove(id));
  };
  const toggleStatus = (id) => {
    dispatch(toggle(id));
  };
  return (
    <CardList className="cardLi">
      <Card>
        <Link to={`/${todo.id}`}>
          <DetailBtn>상세보기</DetailBtn>
        </Link>
        <AboutTodo>
          <CardTitle>{todo.title}</CardTitle>
          <CardDetail>{todo.detail}</CardDetail>
        </AboutTodo>
        <BtnContainer>
          <span
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
            className="changeBtn"
            onClick={() => toggleStatus(todo.id)}
          >
            {todo.status ? (
              <span className="material-symbols-outlined">undo</span>
            ) : (
              <span className="material-symbols-outlined">done</span>
            )}
          </span>
          <span
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
            className="material-symbols-outlined"
            onClick={() => deleteTodo(todo.id)}
          >
            Close
          </span>
        </BtnContainer>
      </Card>
    </CardList>
  );
};

const CardList = styled.li`
  list-style: none;
  border: 4px solid black;
  border-radius: 20px;
  padding: 3%;
  box-shadow: 10px 10px 20px 5px #ccc;
`;
const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  min-width: 17vw;
  max-width: 17vw;
`;
const DetailBtn = styled.div`
  text-decoration: none;
  position: absolute;
  top: 0;
  right: 0;
  color: black;
  font-weight: 500;
  :hover {
    color: #323b42;
  }
`;
const AboutTodo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  width: 80%;
`;
const CardTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
`;
const CardDetail = styled.div`
  color: gray;
  font-weight: 500;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export default TodoCard;
