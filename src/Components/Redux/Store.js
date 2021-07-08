import thunk from "redux-thunk";
import {applyMiddleware, createStore,combineReducers} from "redux";
import {movieReducer} from "./Movie/movieReducer";
const reducers = combineReducers({
    moviesState: movieReducer,
});

const middlewares = [thunk];

const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
);

export default store;
