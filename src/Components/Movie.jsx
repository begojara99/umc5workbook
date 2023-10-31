import React from "react";

function Movie(props) {
  return (
    <div className="movie-container">
      <div className="img">
        <img src={props.movie.poster_path} alt="영화 이미지" />
      </div>
      <div className="info-container">
        <h3>{props.movie.title}</h3>
        <h3>{props.movie.vote_average}</h3>
      </div>
      <div className="overview">{props.movie.overview}</div>
    </div>
  );
}

export default Movie;
