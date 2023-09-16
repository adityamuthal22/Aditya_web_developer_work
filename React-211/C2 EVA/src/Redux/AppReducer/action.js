//Create ActionCreator functions here
import * as types from "./actionTypes";
import axios from "axios";

export const getShoesAPI = (params) => (dispatch) => {
  dispatch({ type: types.GET_SHOES_DATA_REQUEST });
  axios
    .get("http://localhost:8080/shoes", params)
    .then((res) => {
      dispatch({ type: types.GET_SHOES_DATA_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_SHOES_DATA_FAILURE });
    });
};
