/**
 * @desc : TodoList
 * @todo :
 * 1. react-hook-form 사용하기
 *
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

function ToDoList() {
  const { register, watch } = useForm();
  console.log("toDo");
  console.log(watch());

  return (
    <div>
      <form>
        {/* useForm 사용 */}
        <input {...register("toDo")} placeholder="Write to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
