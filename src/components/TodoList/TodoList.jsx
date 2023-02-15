import AddTodo from "../AddTodo/AddTodo";
import TodoCard from "../TodoCard/TodoCard";
import { useSelector } from "react-redux";
import styled from "styled-components";
const TodoList = () => {
  const todos = useSelector((state) => state.toDoData.todos);

  return (
    <Container>
      <AddTodo />
      <Inner>
        <Working>
          <h2>Working 🔥</h2>
          <Lists>
            {todos?.map((todo) => {
              if (!todo.status) {
                return <TodoCard key={todo.id} todo={todo} />;
              }
            })}
          </Lists>
        </Working>
        <Done>
          <h2>Done 🎉</h2>
          <Lists>
            {todos?.map((todo) => {
              if (todo.status) {
                return <TodoCard key={todo.id} todo={todo} />;
              }
            })}
          </Lists>
        </Done>
      </Inner>
    </Container>
  );
};

const Container = styled.section`
  padding: 3%;
`;
const Lists = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0;
`;
const Inner = styled.div`
  display: flex;
`;
const Working = styled.div`
  margin: 0 auto;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Done = styled.div`
  margin: 0 auto;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export default TodoList;
