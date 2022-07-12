import React from "react";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieList.css";

const MovieList = ({ movies, title, rateValue }) => {
  return (
    <div className="movieList">
      {movies
        .filter(
          (movie) =>
            movie.title.toUpperCase().includes(title.toUpperCase()) &&
            movie.rating >= rateValue
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MovieList;
