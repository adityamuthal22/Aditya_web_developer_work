import { createStore } from "redux";
import { reducer } from "./reducer";

class Store {
  #state; // private
  #updater; // updater fn
  #listenerCallback; //
  constructor(initState, updaterFn) {
    this.#state = initState;
    this.#updater = updaterFn;
  }
  getState() {
    return this.#state;
  }
  get state() {
    return this.#state;
  }
  dispatch(action) {
    // you get a new state
    const currentState = this.#state;
    const newState = this.#updater(currentState, action);
    this.#state = newState;
    if (currentState === newState) {
      // state has not changed
      return;
    } else {
      // state has changed
      if (this.#listenerCallback) this.#listenerCallback();
    }
  }
  subscribe(callback) {
    this.#listenerCallback = callback;
  }
}

export const store = createStore(reducer, { count: 1 });

console.log(store.state);

store.dispatch({ type: "INCREMENT_AMOUNT" });
store.dispatch({ type: "INCREMENT_AMOUNT" });
store.dispatch({ type: "INCREMENT_AMOUNT" });
