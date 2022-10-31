import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    yield put({
      type: "SET_MOVIES",
      payload: movies.data,
    });
  } catch {
    console.log("get all error");
  }
}

function* updateMovie(action) {
  try {
    yield axios.put(`/api/movie/${action.payload.id}`, action.payload);
  } catch (error) {
    console.log("update error", error);
  }
}

function* movieSaga() {
  yield takeLatest("FETCH_MOVIES", fetchAllMovies);
  yield takeLatest("UPDATE_MOVIE", updateMovie);
}

export default movieSaga;
