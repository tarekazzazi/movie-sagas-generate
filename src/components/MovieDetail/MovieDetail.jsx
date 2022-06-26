import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieDetail.css';
function MovieDetail() {
    const movies = useSelector(store => store.movies);

    console.log('In movie detail');
    const { id } = useParams();


    return (
        <>
            <div className='container'>
                <h3>{movies[id].title}</h3>
                    <img src={movies[id].poster} />
                

                <div className='textbox'>

                    <p>{movies[id].description}</p>
                    <Link to={'/'}>
                        <button>Go Back</button>
                    </Link>
                </div>


            </div>


        </>
    )

}

export default MovieDetail;