import { SELECTED_FRUIT } from "../Const";

export function selectedObject(value) {
  return {
    type: SELECTED_FRUIT,
    payload: value,
  };
}
