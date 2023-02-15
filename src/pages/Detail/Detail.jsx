import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getID } from "../../redux/modules/toDoData";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.toDoData.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getID(id));
  }, [dispatch, id]);

  return (
    <DetailCardPage>
      <DetailCard>
        <DetailTodo>
          <h1>{todo.title}</h1>
          <div>{todo.detail}</div>
        </DetailTodo>
        <TodoIdBox>
          <ToId>ID :{todo.id}</ToId>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
            className="material-symbols-outlined"
          >
            undo
          </span>
        </TodoIdBox>
      </DetailCard>
    </DetailCardPage>
  );
};

const DetailCardPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#323b42, #121317);
`;
const DetailCard = styled.div`
  width: 25vw;
  height: 25vw;
  background-color: white;
  box-shadow: 10px 10px 20px 5px #ccc;
`;

const DetailTodo = styled.div`
  font-family: "Jua", sans-serif;
  height: 80%;
  padding: 5%;
`;
const TodoIdBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ToId = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export default Detail;
