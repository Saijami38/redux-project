import { SELECTED_FRUIT_PERSIST, RESET_PERSIST_STORE } from "../Const";

export function selectedFruitNames(value) {
  return {
    type: SELECTED_FRUIT_PERSIST,
    payload: value,
  };
}

export function resetPersistStore() {
  return {
    type: RESET_PERSIST_STORE,
  };
}
