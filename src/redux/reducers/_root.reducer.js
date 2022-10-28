
import { combineReducers } from "redux";
import genres from "./genre.reducer";
import movies from "./movie.reducer";

const rootReducer = combineReducers({
    genres,
    movies,
});

export default rootReducer;