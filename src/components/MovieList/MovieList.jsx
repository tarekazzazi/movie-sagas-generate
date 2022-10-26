import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import backgroundImg from "../../assets/plain-dark-blue.jpg";
import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  const movies = useSelector((store) => store.movies);
  const genres = useSelector((store) => store.genres);

  console.log(genres);

  return (
    <main>
      {/* <h1>MovieList</h1> */}

      <div
        id="background"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          height: "100%",
        }}
      >
        <br />
        <div clssname="container">
          <section className="movies">
            {/* take in every movie from movies and map with id */}
            {genres.map((genre, i) => {
              return (
                <div key={genre.id}>
                  <h2> {genre.name}</h2>
                </div>
              );
            })}
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
      </div>
    </main>
  );
}

export default MovieList;
