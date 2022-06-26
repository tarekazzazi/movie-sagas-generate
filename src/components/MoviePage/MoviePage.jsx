import { Link } from 'react-router-dom';
import './MoviePage.css';
import axios from 'axios';
function MovieForm() {
    // building out axios all on MoviePage side before converting into sagas
    axios.get('/genres')

        .then((respose) => {
            console.log(respose);
        })
    function addToDb(e) {
        e.preventDefault();
        console.log('in addToDb');

    }

    return (
        <>

            <h2>Add a new movie here!</h2>
            <form onSubmit={addToDb}>
                <label htmlFor="text">Movie Title</label>
                <input type="text" placeholder='Add movie title ' />

                <label htmlFor="text">Movie Poster</label>
                <input type="text" placeholder='Add a movie image ' />

                <select className='genres'>
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical"> Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Disaster">Disaster</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="ScienceFiction">Science Fiction</option>
                    <option value="SpaceOpera">Space-Opera</option>
                    <option value="Superhero">Superhero</option>
                </select>

                <textarea name="description" id="movieDescription" cols="30" rows="10" placeholder='Add description...'></textarea>

                <Link to={'/'}>
                    <button>Cancel</button>
                </Link>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}

export default MovieForm;