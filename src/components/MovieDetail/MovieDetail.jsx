import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function MovieDetail() {
    const movies = useSelector(store => store.movies);

    console.log('In movie detail');
    const { id } = useParams();


    return (
        <>
            <h3>{movies[id].title}</h3>

            <img src={movies[id].poster} />
            <p>{movies[id].description}</p>
            <Link to={'/'}>
                <button>Go Back</button>
            </Link>
        </>
    )

}

export default MovieDetail;