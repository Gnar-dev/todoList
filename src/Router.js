import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoListForm from "./pages/Home/TodoListForm";
import Detail from "./pages/Detail/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoListForm />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
