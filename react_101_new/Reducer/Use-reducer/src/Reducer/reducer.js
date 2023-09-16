let initValue = {
  count: 0
};

export function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      let updatedState = {
        count: Number(action.amount) + Number(action.adder)
      };
      console.log(`updated state is`, updatedState);
      return updatedState;
    }
    case "DECREMENT": {
      return {
        count: action.amount - action.adder
      };
    }
    default:
      return state;
  }
}

export const incrementAction = (amount, adder) => {
  return { type: "INCREMENT", amount: amount, adder: adder };
};
export const decrementAction = (amount, adder) => {
  return { type: "DECREMENT", amount: amount, adder: adder };
};

