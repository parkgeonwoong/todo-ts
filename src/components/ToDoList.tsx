/**
 * @desc : TodoList
 * @todo :
 * 1. react-hook-form 사용하기
 * 2. Recoil 상태값 관리하기
 * 3. 기능구현 후 리팩토링
 */

import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(todoState);

  return (
    <Container>
      {/* 타이틀 */}
      <Helmet>
        <title>Todo List</title>
      </Helmet>

      <Box>
        <h1>Todo List</h1>
      </Box>

      {/* 폼 */}
      <CreateToDo />

      {/* 리스트 */}
      <ul>
        {toDos.map((toDo) => (
          // ❓ props를 일일이 넣어주는 것이 아닌 {...toDo}해도 값이 들어감
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 20px 0px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  margin-bottom: 20px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border-radius: 10px;
  background-color: white;

  h1 {
    font-size: 25px;
    font-weight: 700;
  }
`;

export default ToDoList;
