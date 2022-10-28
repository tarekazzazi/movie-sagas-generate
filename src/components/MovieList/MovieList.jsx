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
  
  const handleClick = (e) => {
  console.log(e.target.innerText);

  const array = [];
  let id = e.target.value;
  console.log(id);
  console.log('gerens sdnandskndsk >>>>',genres.id)
  // if (id ===  ) {
  
  //   array.push(id);
  // }
  console.log(array);
  };
  const checkGenre = (movie) => {
      // console.log(movie);

  }
 
  return (
<>
      <img src={backgroundImg} className="bg"/>
        <div clssname="container">
          <section className="genres"> 
            {genres.map((genre) => {
                return (
                  <div key={genre.id}>
                    <ul className="genre-links">
                      <li onClick={(e) => handleClick(e)} value={genre.id}>{genre.name}</li>
                    </ul> 
                  </div>   
                );
              })}
          </section>
          <br />
          <br />
          <section>
            {movies.filter(checkGenre)}
          </section>
        
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
