/**
 * @desc : TodoList
 * @todo :
 * 1. react-hook-form 사용하기
 *
 */

import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import styled from "styled-components";

// TODO: 인터페이스 정의
interface IForm {
  toDo: string;
}

function ToDoList() {
  // TODO: useForm 사용하기
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();

  // TODO: submit 이벤트 핸들러
  const handleValid = (data: IForm) => {
    console.log("data toDo: ", data.toDo);
    setValue("toDo", "");
  };

  return (
    <Container>
      {/* 타이틀 */}
      <Helmet>
        <title>Todo List</title>
      </Helmet>

      {/* 폼 */}
      <Form onSubmit={handleSubmit(handleValid)}>
        <h1>Todo List</h1>
        <input
          {...register("toDo", { required: "Please write Todo" })}
          placeholder="Write to do"
        />
        <span>{errors?.toDo?.message}</span>
        <button>Add</button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 20px 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border-radius: 10px;
  background-color: white;
  /* height: 80vh; */

  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  input {
    width: 80%;
    height: 40px;
    margin: 10px;
    padding: 0px 10px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
  }

  span {
    font-size: 12px;
    color: red;
  }

  button {
    width: 80%;
    height: 40px;
    margin-top: 10px;
    border: none;
    border-radius: 10px;
    background-color: #e5e5e5;
    font-size: 16px;
    font-weight: 700;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #d5d5d5;
    }
  }
`;

export default ToDoList;
