//Create ActionCreator functions here

import {
  GET_SHOES_FAILURE,
  GET_SHOES_REQUEST,
  GET_SHOES_SUCCESS,
  UPDATE_SHOE_COUNT_FAILURE,
  UPDATE_SHOE_COUNT_REQUEST,
  UPDATE_SHOE_COUNT_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const getShoesRequest = () => {
  return { type: GET_SHOES_REQUEST };
};

export const getShoesSuccess = (data) => {
  return { type: GET_SHOES_SUCCESS, payload: data };
};

export const getShoesFailure = () => {
  return { type: GET_SHOES_FAILURE };
};

export const IncQunAPI = (el, value, dispatch) => {
  let newQut = el.cart_quantity + value;
  dispatch({ type: UPDATE_SHOE_COUNT_REQUEST });
  axios
    .patch(` http://localhost:8080/shoes/${el.id}`, {
      cart_quantity: newQut,
    })
    .then((res) => {
      dispatch({ type: UPDATE_SHOE_COUNT_SUCCESS, payload: { el, newQut } });
    })
    .catch(() => {
      dispatch({ type: UPDATE_SHOE_COUNT_FAILURE });
    });
};

export const DecQunAPI = (el, value, dispatch) => {
  let newQut = el.cart_quantity - value;
  dispatch({ type: UPDATE_SHOE_COUNT_REQUEST });
  axios
    .patch(` http://localhost:8080/shoes/${el.id}`, {
      cart_quantity: newQut,
    })
    .then((res) => {
      dispatch({ type: UPDATE_SHOE_COUNT_SUCCESS, payload: { el, newQut } });
    })
    .catch(() => {
      dispatch({ type: UPDATE_SHOE_COUNT_FAILURE });
    });
};
