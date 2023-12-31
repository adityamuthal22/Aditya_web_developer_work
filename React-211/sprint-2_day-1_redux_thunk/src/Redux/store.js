import { legacy_createStore ,applyMiddleware} from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk"


// const customMiddleware =(store)=>(next)=>(action)=>{
//     if(typeof action === "function"){
//         return action(store.dispatch);
//     }else if (typeof action ==="object"){
//         return next(action);
//     }
// }


const store =legacy_createStore(reducer,applyMiddleware(thunk));

export {store}