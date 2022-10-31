import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchAllGenres() {
  // get all genres from the DB
  try {
    const genres = yield axios.get("/api/genre");
    yield put({
      type: "SET_GENRES",
      payload: genres.data,
    });
  } catch {
    console.log("get all error");
  }
}

function* fetchMovieByGenre(action) {
  console.log("hello", action.payload);
  try {
    const genres = yield axios.get(`/api/genre/`, action.payload);
    yield put({
      type: "SET_MOVIES_GENRE",
      payload: genres.data,
    });
  } catch {
    console.log("get all error");
  }
}

function* genreSaga() {
  // yield takeLatest("FETCH_GENRES", fetchAllGenres);
  yield takeLatest("FETCH_MOVIES_BY_GENRE", fetchMovieByGenre);
}

export default genreSaga;
