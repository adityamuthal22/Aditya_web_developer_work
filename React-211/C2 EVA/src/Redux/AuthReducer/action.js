//Create ActionCreator functions here
import axios from "axios";
import * as types from "./actionTypes";

export const loginAPI = (creds) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login", creds)
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(() => {
      dispatch({ type: types.LOGIN_FAILURE });
    });
};
