import { SELECTED_FRUIT } from "../Const";

const intialState = {
  fruits: ["Apple", "Mango", "Banana", "Orange"],
  selectedFruit: "",
};

export default function FruitsReducer(state = intialState, actions) {
  switch (actions.type) {
    case SELECTED_FRUIT:
      return {
        ...state,
        selectedFruit: actions.payload,
      };

    default:
      return state;
  }
}
