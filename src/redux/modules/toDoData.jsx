// Action value
const ADD = "toDoData/ADD";
const REMOVE = "toDoData/REMOVE";
const TOGGLE_STATUS = "toDoData/TOGGLE_STATUS";
const GET_ID = "toDoData/GET_ID";

// Action Create
// todo 추가
export const add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};
// todo 제거
export const remove = (payload) => {
  return {
    type: REMOVE,
    payload,
  };
};
// status 변경
export const toggle = (payload) => {
  return {
    type: TOGGLE_STATUS,
    payload,
  };
};
// detail ID 값
export const getID = (payload) => {
  return {
    type: GET_ID,
    payload,
  };
};
// 초기값 설정
const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트",
      detail: "리액트를 배워봅시다",
      status: false,
    },
  ],
  todo: {
    id: "",
    title: "",
    detail: "",
    status: false,
  },
};

const toDoData = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              status: !todo.status,
            };
          } else {
            return todo;
          }
        }),
      };

    case GET_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default toDoData;
