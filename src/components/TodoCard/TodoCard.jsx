import React from "react";
import "./TodoCard.scss";

const TodoCard = ({ todo, onUpdate, onDelete }) => {
  const { id, title, detail, status } = todo;

  const handleChange = () => {
    onUpdate({ ...todo, status: !todo.status });
  };

  const handleDelete = () => onDelete(todo);
  return (
    <li className="cardLi">
      <div className="todoCard">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardDetail">{detail}</p>
        <div className="btnContainer">
          <button className="deleteBtn" onClick={handleDelete}>
            삭제하기
          </button>
          <button className="changeBtn" onClick={handleChange}>
            {status ? "취소하기" : "완료하기"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoCard;
