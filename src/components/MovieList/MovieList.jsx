import React, { useEffect, useState } from "react";
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

  console.log();
  const handleClick = (e) => {
  console.log(e.target.innerText);
  };
 
  return (
<>
      <img src={backgroundImg} className="bg"/>
        <div clssname="container">
          <section className="genres"> 
            {genres.map((genre) => {
                return (
                  <div key={genre.id}>
                    <ul className="genre-links">
                      <li onClick={(e) => handleClick(e)}>{genre.name}</li>
                    </ul> 
                  </div>   
                );
              })}
          </section>
          <br />
          <br />
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
    </>
  );
}

export default MovieList;
