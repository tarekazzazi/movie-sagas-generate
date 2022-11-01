import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchMovieByGenre(action) {
  console.log("hello", action.payload);
  try {
    const res = yield axios.get(
      `/api/genre/${action.payload.id}`,
      action.payload
    );
    console.log("GOING IN STORE >>>>", res.data);
    yield put({
      type: "SET_MOVIES_GENRE",
      payload: res.data,
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
