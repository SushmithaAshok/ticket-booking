import React from "react";
import MovieCard from "./MovieCard";
import "./Home.css";

const MovieRow = ({ title, movies }) => {
  return (
    <div className="movie-row">
      <div className="row-header">
        <h2>{title}</h2>
        <span className="see-all">See All</span>
      </div>

      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;