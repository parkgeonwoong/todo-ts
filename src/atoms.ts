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

// Selector
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(todoState); // selector가 atom을 읽을 때는 get을 사용한다.
    return [
      toDos.filter((todo) => todo.category === "TODO"),
      toDos.filter((todo) => todo.category === "ACTIVE"),
      toDos.filter((todo) => todo.category === "DONE"),
    ];
  },
});
