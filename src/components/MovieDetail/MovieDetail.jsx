import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieDetail.css';
import * as React from 'react';
import Button from '@mui/material/Button';
function MovieDetail() {
    // Grabs list of movies from store
    const movies = useSelector(store => store.movies);

    console.log('In movie detail');
    // sets movie id to id
    
    const { id } = useParams();


    return (
        <>
            <div className='container'>
                {/* For the movie clicked from movies array display that title  */}
                <h3>{movies[id].title}</h3>
                 {/* For the movie clicked from movies array display that image src link  */}
                <img src={movies[id].poster} />



                 {/* For the movie clicked from movies array display the description of the film  */}
                <p>{movies[id].description}</p>
                {/* added a link to the home page and a material ui button */}
                <Link to={'/'}>
                    <Button variant="text">
                        Go Back
                    </Button>
                </Link>




            </div>


        </>
    )

}

export default MovieDetail;