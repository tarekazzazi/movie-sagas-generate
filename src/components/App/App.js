import { HashRouter as Router, Route } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import MovieDetail from "../MovieDetail/MovieDetail";
import EditMovie from "../MovieDetail/EditMovie";
import MoviePage from "../MoviePage/MoviePage";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Movie Details page */}
        <Route path="/movies/:id" exact>
          <MovieDetail />
        </Route>
        {/* Edit Movie page */}
        <Route path="/editMovie/:id" exact>
          <EditMovie />
        </Route>
        {/* Add Movie page */}
        <Route path="/movieform" exact>
          <MoviePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
