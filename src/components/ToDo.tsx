/**
 * @desc : Todo 생성한 것을 보여주는 컴포넌트
 */

import styled from "styled-components";
import { IToDo } from "../atoms";

function ToDo({ text }: IToDo) {
  return (
    <LiBox>
      <span>👉 {text}</span>
      <button>TODO</button>
      <button>DOING</button>
      <button>DONE</button>
    </LiBox>
  );
}

const LiBox = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin: 10px 0px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border-radius: 10px;
  background-color: white;

  span {
    font-size: 18px;
    font-weight: 700;
  }

  button {
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #f1f3f5;
    color: #212529;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;

    :hover {
      background-color: #e9ecef;
    }
  }
`;

export default ToDo;
