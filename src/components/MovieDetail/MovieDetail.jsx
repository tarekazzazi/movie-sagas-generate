import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function MovieDetail() {
    const movies = useSelector(store => store.movies);
   
    console.log('In movie detail');
    
    const { id } = useParams();
    return (
        <>
            <img src={movies[id].poster} />
        </>
    )

}

export default MovieDetail;