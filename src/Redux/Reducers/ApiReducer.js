import {
  GET_API_DATA,
  GET_API_DATA_SUCCESS,
  GET_API_DATA_FAILURE,
} from "../Const";

const intialState = {
  data: [],
  isLoading: false,
  error: null,
};

export default function getApiData(state = intialState, actions) {
  switch (actions.type) {
    case GET_API_DATA: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case GET_API_DATA_SUCCESS: {
      return {
        ...state,
        data: actions.payload,
        isLoading: false,
      };
    }
    case GET_API_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: actions.payload,
      };
    }
    default:
      return state;
  }
}
