import { put,takeLatest } from "redux-saga/effects";
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

  function* genreSaga(){
      yield takeLatest("FETCH_GENRES", fetchAllGenres);
  }

  export default genreSaga;