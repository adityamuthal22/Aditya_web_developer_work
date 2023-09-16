
let initValue = {
  count: 0
};

export default function CountReducer(state,action){
  switch (action.type) {
    case "INCREMENT": {
      let updatedState = {
        ...state,
        // if you have a payload, you can write state.count + action.payload
        count: state.count + 1
      };
      console.log(`updated state is`, updatedState);
      return updatedState;
    }
    case "DECREMENT": {
      return {
        ...state,
        count: state.count - 1
      };
    }
    default:
      return state;
  }
}
// let initValue = {
//   count: 0
// };
export const incrementAction = { type: "INCREMENT", payload: 1000 };
export const decrementAction = { type: "DECREMENT" };
console.log(initValue);
let s = CountReducer(initValue, incrementAction);
console.log(`after first time`, s);
s = CountReducer({ count: 2 }, incrementAction);
s = CountReducer(s, decrementAction);
console.log(`last time`, s);