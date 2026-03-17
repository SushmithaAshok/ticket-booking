import React from "react";
import "./Home.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.rating}</p>
    </div>
  );
};

export default MovieCard;