import { all } from "redux-saga/effects";
import genreSaga from "./genre.saga";
import movieSaga from "./movie.saga";

export default function* rootSaga() {
    yield all([
        genreSaga(),
        movieSaga(),
    ])
}

