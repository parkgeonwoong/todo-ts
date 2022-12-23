/**
 * @desc : Form ToDo 생성
 */

import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms";

//  인터페이스 정의
interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(todoState); // Recoil 상태값 변경 함수
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>(); // useForm 훅 사용

  // submit 이벤트 핸들러
  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [
      { text: toDo, id: Date.now(), category: "TODO" },
      ...prev,
    ]);
    setValue("toDo", "");
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: "Please write Todo" })}
        placeholder="Write to do"
      />
      <span>{errors?.toDo?.message}</span>
      <button>Add</button>
    </Form>
  );
}

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

export default CreateToDo;