import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail.jsx';
import './App.css'
function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1>The Movies Saga!</h1>
      </div>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/movies/:id" exact>
          <MovieDetail />
        </Route>
        {/* Add Movie page */}
      </Router>
    
    </div>
  );
}


export default App;
