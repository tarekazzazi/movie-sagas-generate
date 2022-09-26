import { HashRouter as Router, Route } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import MovieDetail from "../MovieDetail/MovieDetail";
import EditMovie from "../MovieDetail/EditMovie";
import MoviePage from "../MoviePage/MoviePage";
import "./App.css";
import banner from "../../assets/NowShowing.png";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={banner}></img>
      </div>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/movies/:id" exact>
          <MovieDetail />
        </Route>
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
