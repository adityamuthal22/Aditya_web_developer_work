import {legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import blogReducer from './Blogs/reducer';
import thunk from 'redux-thunk';

const rootReducer= combineReducers({blogReducer});

const combineEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    combineEnhancers(applyMiddleware(thunk))
 );
