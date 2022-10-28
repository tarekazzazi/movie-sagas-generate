import genres from "./genre.reducer.js";
import movies from "./movie.reducer.js";

const rootReducer = combineReducers({
    genres,
    movies,
});

export default rootReducer;