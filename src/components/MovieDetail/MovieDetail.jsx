import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieDetail.css';
import * as React from 'react';
import Button from '@mui/material/Button';
function MovieDetail() {
    const movies = useSelector(store => store.movies);

    console.log('In movie detail');
    const { id } = useParams();


    return (
        <>
            <div className='container'>
                <h3>{movies[id].title}</h3>
                <img src={movies[id].poster} />




                <p>{movies[id].description}</p>
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