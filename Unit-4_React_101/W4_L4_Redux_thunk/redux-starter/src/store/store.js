import { legacy_createStore,
applyMiddleware,
combineReducers,
compose,

} from "redux";
import { authReducer } from "./Auth/Auth.reducer";
import { feedReducer } from "./feed/feed.reducer";


 const rootReducer =combineReducers({
    auth:authReducer,
    feed:feedReducer
});

export const store =legacy_createStore(rootReducer,combineReducers,compose,applyMiddleware);