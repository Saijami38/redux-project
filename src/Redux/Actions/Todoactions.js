import { ADD_VALUE, REMOVE_TODO } from "../Const";

export function handleSubmit(value) {
  return {
    type: ADD_VALUE,
    payload: value,
  };
}

export function removeTodo(value) {
  return {
    type: REMOVE_TODO,
    payload: value,
  };
}
