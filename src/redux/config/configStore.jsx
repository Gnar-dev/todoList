//중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import toDoData from "./../modules/toDoData";

const rootReducer = combineReducers({
  toDoData,
});
const store = createStore(rootReducer);

export default store;
