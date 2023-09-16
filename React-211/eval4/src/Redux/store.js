import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer  as Appreducer} from "./reducer";
import thunk from "redux-thunk"
// NOTE: use this store variable to create a store.
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer=combineReducers({Appreducer})
export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
