import {createStore , combineReducers} from "redux";
import { counterReducer } from "./counter.reducer";
import { todoReducer } from "./todo.reducer";

 const rootreducer = combineReducers({
    counter:counterReducer,
    todo:todoReducer,
});


export const store = createStore(rootreducer);
