import {
  GET_API_DATA_SUCCESS,
  GET_API_DATA_FAILURE,
  GET_API_DATA,
} from "./../Const";

export const handleCallApi = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_API_DATA_SUCCESS,
          payload: json,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_API_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};
