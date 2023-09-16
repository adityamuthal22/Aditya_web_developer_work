import {
  GET_SHOES_FAILURE,
  GET_SHOES_REQUEST,
  GET_SHOES_SUCCESS,
  UPDATE_SHOE_COUNT_SUCCESS,
} from "./actionTypes";

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SHOES_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case GET_SHOES_SUCCESS: {
      return { ...state, shoes: payload, isLoading: false, isError: false };
    }

    case GET_SHOES_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case UPDATE_SHOE_COUNT_SUCCESS: {
      let newShoe = state.shoes.map((sh) => {
        if (sh.id === payload.el.id) {
          sh.cart_quantity = payload.newQut;
        }
        return sh;
      });
      return { ...state, shoes: newShoe };
    }

    default: {
      return state;
    }
  }
};
