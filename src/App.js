import { useState } from "react";
import moviesData from "./MoviesData";

import "./App.css";
import Filter from "./Components/Filter/Filter";
import MovieList from "./Components/MovieList/MovieList";
import AddMovie from "./Components/AddMovie/AddMovie";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [title, setTitle] = useState("");
  const [rateValue, setRateValue] = useState(1);

  return (
    <div className="movieApp">
      <div className="headPart">
        <Filter
          title={title}
          setTitle={setTitle}
          rateValue={rateValue}
          setRateValue={setRateValue}
        />
        <AddMovie movies={movies} setMovies={setMovies} />
      </div>
      <MovieList movies={movies} title={title} rateValue={rateValue} />
    </div>
  );
}

export default App;
