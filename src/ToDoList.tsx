/**
 * @desc : TodoList
 * @todo :
 * 1. react-hook-form 사용하기
 *
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write to do" />
        <button>Add</button>
      </form>
    </div>
  );
} */

interface IForm {
  toDo: string;
  email: string;
  password: string;
  password1: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: IForm) => {
    console.log("data: ", data);

    // 에러를 생성해서 보여주기
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password not match" },
        { shouldFocus: true }
      );
    }
  };

  console.log("Error: ", errors);
  // console.log(watch());

  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <h1>ToDo List</h1>
        {/* useForm 사용 */}
        <input
          // 옵셥을 줄 수 있다.
          {...register("toDo", {
            required: "Required Todo",
            // 원하는 규칙을 검사해보기
            validate: {
              a: (value) => value.includes("a") || "Should include a",
              b: (value) => value.includes("b") || "Should include b",
            },
          })}
          placeholder="Write to do"
        />

        {/* formState를 통해 에러 메시지 보여주기 */}
        <span>{errors?.toDo?.message}</span>

        <input
          {...register("email", {
            required: "Email is required",
            minLength: {
              value: 10,
              message: "Min length is 10",
            },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com email is allowed",
            },
          })}
          placeholder="Naver Email"
        />
        <span>{errors?.email?.message}</span>

        <input
          {...register("password", { required: "Required password" })}
          placeholder="password"
        />

        <input
          {...register("password1", { required: "Required password" })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>
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
