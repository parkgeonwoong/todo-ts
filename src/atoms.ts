/**
 * @desc : Recoil Atoms 파일
 */

import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TODO" | "ACTIVE" | "DONE";
}

export const todoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
