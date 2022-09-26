import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./MovieDetail.css";
import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";

function MovieDetail() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  // Grabs list of movies from store
  const movies = useSelector((store) => store.movies);
  const { id } = useParams();

  // EDANS WAY
  /* 
      const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch({ type: 'FETCH_ACTIVE_MOVIE' });
    }, []);
    */
  //
  //
  console.log("In movie detail");
  // sets movie id to id

  console.log("is movies defined", movies);
  console.log("is movies defined", id);

  return (
    <>
      <div className="container">
        {/* For the movie clicked from movies array display that title  */}
        <h3>{movies[id]?.title}</h3>
        {/* For the movie clicked from movies array display that image src link  */}
        <img src={movies[id]?.poster} />
        {/* For the movie clicked from movies array display the description of the film  */}
        <p>{movies[id]?.description}</p>
        {/* added a link to the home page and a material ui button */}
        <Link to={"/"}>
          <Button variant="text">Go Back</Button>
        </Link>
        <Link to={`/editMovie/${id}`}>
          <Button variant="text">Edit</Button>
        </Link>
      </div>
    </>
  );
}

export default MovieDetail;
