import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./MovieDetail.css";
import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import backgroundImg from "../../assets/plain-dark-blue.jpg";
import GenreList from "../GenreList/GenreList";

function MovieDetail() {
  // Grabs list of movies from store
  const movies = useSelector((store) => store.movies);
  const { id } = useParams();
  const dispatch = useDispatch();

  // const MoviesSortedByGenre = () => {};

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <>
      <img src={backgroundImg} className="bg" />

      <GenreList />

      <div className="movie-detail-container">
        {/* For the movie clicked from movies array display that title  */}
        <h3>{movies[id]?.title}</h3>
        {/* For the movie clicked from movies array display that image src link  */}
        <img src={movies[id]?.poster} />
        {/* For the movie clicked from movies array display the description of the film  */}
        <p>{movies[id]?.description}</p>
        {/* added a link to the home page and a material ui button */}
        <Link to={"/"}>
          <Button
            variant="text"
            sx={{
              color: "#CCE6F4",
              fontWeight: "bold",
            }}
          >
            Go Back
          </Button>
        </Link>
        <Link to={`/editMovie/${id}`}>
          <Button
            variant="text"
            sx={{
              color: "#CCE6F4",
              fontWeight: "bold",
            }}
          >
            Edit
          </Button>
        </Link>
      </div>
    </>
  );
}

export default MovieDetail;
