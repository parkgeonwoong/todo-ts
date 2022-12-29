/**
 * @desc : Recoil Atoms 파일
 */

import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TODO" | "ACTIVE" | "DONE";
}

export const todoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom({
  key: "category",
  default: "TODO",
});

// Selector
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(todoState); // selector가 atom을 읽을 때는 get을 사용한다.
    const category = get(categoryState);

    // 3.2번 한줄로 줄이기
    return toDos.filter((todo) => todo.category === category);

    // 2. 조건에 따른 상태값 리턴
    // if (category === "TODO")
    //   return toDos.filter((todo) => todo.category === "TODO");
    // if (category === "ACTIVE")
    //   return toDos.filter((todo) => todo.category === "ACTIVE");
    // if (category === "DONE")
    //   return toDos.filter((todo) => todo.category === "DONE");

    // 1. 모든 상태값 배열로 반환하는 법
    // return [
    //   toDos.filter((todo) => todo.category === "TODO"),
    //   toDos.filter((todo) => todo.category === "ACTIVE"),
    //   toDos.filter((todo) => todo.category === "DONE"),
    // ];
  },
});
