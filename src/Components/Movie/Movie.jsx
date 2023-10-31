import React from "react";
import {
  MovieContainer,
  Overview,
  InfoContainer,
  Img,
} from "./Movie.style"; 

function Movie(props) {
  return (
    <MovieContainer>
      <Img>
        <img src={props.movie.poster_path} alt="Movie image" />
      </Img>
      <InfoContainer>
        <h3>{props.movie.title}</h3>
        <h3>{props.movie.vote_average}</h3>
      </InfoContainer>
      <Overview>{props.movie.overview}</Overview>
    </MovieContainer>
  );
}

export default Movie;
