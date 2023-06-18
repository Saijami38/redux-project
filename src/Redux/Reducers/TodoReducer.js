import { ADD_VALUE, REMOVE_TODO } from "../Const";

const intialState = {
  toDoList: [],
};

export default function TodoReducer(state = intialState, actions) {
  switch (actions.type) {
    case ADD_VALUE:
      return {
        ...state,
        toDoList: [...state.toDoList, actions.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.filter((title) => title !== actions.payload),
      };

    default:
      return state;
  }
}
