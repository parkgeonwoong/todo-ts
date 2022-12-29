/**
 * @desc : TodoList
 * @todo :
 * 1. react-hook-form 사용하기
 * 2. Recoil 상태값 관리하기
 * 3. 기능구현 후 리팩토링
 */

import React from "react";
import { Helmet } from "react-helmet-async";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDoSelector, todoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // 모든 카테고리를 랜더링할 필요가 없지 않을까? -> 카테고리별로 구분해서 랜더링
  // const toDos = useRecoilValue(todoState);
  const todos = useRecoilValue(toDoSelector); // selector 한 상태값들
  const [category, setCategory] = useRecoilState(categoryState); // 카테고리 상태값
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <Container>
      {/* 타이틀 */}
      <Helmet>
        <title>Todo List</title>
      </Helmet>

      <Box>
        <h1>Todo List</h1>
      </Box>

      <select value={category} onInput={onInput}>
        <option value="TODO">Todo</option>
        <option value="ACTIVE">Active</option>
        <option value="DONE">Done</option>
      </select>

      {/* 폼 */}
      <CreateToDo />

      {/* 리스트 */}
      <ul>
        {todos?.map((todo) => (
          // ❓ props를 일일이 넣어주는 것이 아닌 {...toDo}해도 값이 들어감
          <ToDo key={todo.id} {...todo} />
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
