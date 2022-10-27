import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import backgroundImg from "../../assets/plain-dark-blue.jpg";


function EditMovie() {
  const dispatch = useDispatch();
  const history = useHistory();
  // Grabs list of movies from store
  const movies = useSelector((store) => store.movies);
  const { id } = useParams();
  // defines variables
  let MovieTitle = movies[id]?.title;
  let description = movies[id]?.description;
  // declare local state
  const [newTitle, setNewTitle] = useState(MovieTitle);
  const [newDescription, setNewDescription] = useState(description);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const updateMovie = () => {
    dispatch({
      type: "UPDATE_MOVIE",
      payload: {
        id: Number(id) + 1,
        newTitle,
        newDescription,
      },
    });

    history.push(`/movies/${id}`);
    location.reload(true);
  };

  return (
    
      <div className="movie-detail-container"
      >
        {/* For the movie clicked from movies array display that title  */}
        <input
          type="text"
          defaultValue={MovieTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <br />
        <br />
        {/* For the movie clicked from movies array display that image src link  */}
        <img src={movies[id]?.poster} />

        {/* For the movie clicked from movies array display the description of the film  */}
        <textarea
          type="text"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            width: "40%",
          }}
          defaultValue={description}
          onChange={(e) => setNewDescription(e.target.value)}
        />

        {/* added a link to the home page */}

        <Link to={`/movies/${id}`}>
          <Button variant="text">Go Back</Button>
        </Link>

        <Button variant="text" onClick={updateMovie}>
          Save
        </Button>
      </div>
  
  );
}

export default EditMovie;
