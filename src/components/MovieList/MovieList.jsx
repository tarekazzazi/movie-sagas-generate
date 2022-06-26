import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from 'react-router-dom';
function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <div clssname="container">
                <section className="movies">
                    {movies.map((movie, i) => {
                        return (

                            <div key={movie.id} >
                                <div className='textbox'>
                                    <h2>{movie.title}</h2>
                                    <p>{movie.description}</p>
                                </div>

                                <Link to={`/movies/${i}`}>
                                    <img
                                        src={movie.poster}
                                        alt={movie.title}
                                    />
                                </Link>
                            </div>


                        );
                    })}
                </section>
            </div>
        </main >

    );
}

export default MovieList;