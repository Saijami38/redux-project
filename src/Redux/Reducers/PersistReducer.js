import { SELECTED_FRUIT_PERSIST, RESET_PERSIST_STORE } from "../Const";

const intialState = {
  fruits: ["Apricot", "Cherry", "Guava", "Grapes", "Jackfruit", "Strawberry"],
  selectedFruit: "",
};

export default function PersistReducer(state = intialState, actions) {
  switch (actions.type) {
    case SELECTED_FRUIT_PERSIST:
      return {
        ...state,
        selectedFruit: actions.payload,
      };
    case RESET_PERSIST_STORE:
      return {
        ...state,
        selectedFruit: "",
      };

    default:
      return state;
  }
}
