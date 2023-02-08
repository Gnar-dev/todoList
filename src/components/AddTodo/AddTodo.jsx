import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddTodo.scss";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || detail.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), title, detail, status: false });
    setTitle("");
    setDetail("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="title">제목 : </label>
        <input
          className="inputTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="detail">내용 : </label>
        <input
          className="inputDetail"
          type="text"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <button
          className="inputBtn"
          onClick={(e) => {
            if (title === "" || detail === "") {
              e.preventDefault();
              alert("빈칸 없이 입력해주세요");
            }
          }}
        >
          추가하기
        </button>
      </form>
    </>
  );
};

export default AddTodo;
