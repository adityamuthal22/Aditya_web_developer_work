import * as types from "./actionTypes";

const initialState = {
  data: {
    isAuth: false,
    token: "",
  },
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        data: { isAuth: true, token: payload },
        isLoading: false,
        isError: false,
      };
    }

    case types.LOGIN_FAILURE: {
      return {
        ...state,
        data: { isAuth: false, token: "" },
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
