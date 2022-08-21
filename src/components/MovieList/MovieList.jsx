import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { Link } from "react-router-dom";
function MovieList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const movies = useSelector((store) => store.movies);

  return (
    <main>
      <h1>MovieList</h1>
      <div clssname="container">
        <section className="movies">
          {/* take in every movie from movies and map with id */}
          {movies.map((movie, i) => {
            return (
              <div key={movie.id}>
                <div className="textbox">
                  <h2>{movie.title}</h2>
                  <p>{movie.description}</p>
                </div>
                <div className="card">
                  {/* on movie click go to that movies index and display image and title in detail view */}
                  <Link to={`/movies/${i}`}>
                    <img src={movie.poster} alt={movie.title} />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default MovieList;
