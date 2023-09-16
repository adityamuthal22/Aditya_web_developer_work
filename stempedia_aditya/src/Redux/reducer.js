import { INSERT_INPUT } from "./actionType";

const initialData = {
  InputValue: "",
};
export const reducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case INSERT_INPUT:
      return {
        ...state,
        InputValue: payload,
      };

    default:
      return state;
  }
};
