import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./genre.css";
function GenresList() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    // dispatch({ type: "FETCH_GENRES" });
    dispatch({
      type: "FETCH_MOVIES_BY_GENRE",
      payload: { tags: tags },
    });
  }, []);

  const movies = useSelector((store) => store.movies);
  const genres = useSelector((store) => store.genres);

  let tags = movies[id]?.title;
  console.log(tags);

  return (
    <>
      <section className="genres">
        {genres.map((genre) => {
          return (
            <div key={genre.id}>
              <ul className="genre-links">
                <li>{genre.name}</li>
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default GenresList;
