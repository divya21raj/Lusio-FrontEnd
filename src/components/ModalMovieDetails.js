import React from 'react';
import Aux from '../hoc/Aux';
import AddIcon from '../static/images/add.svg';
import PlayIcon from '../static/images/play-button.svg';

import React from 'react'

export default function ModalMovieDetails(props) {
  var url = "http://localhost:8082/?game=" + props.movie.title; 
  return (
    <Aux>
      <div className="modal__container">
        <h1 className="modal__title">
          {props.movie.title || props.movie.name}
        </h1>
        <p className="modal__info">
          <span className="modal__rating">
            Rating: {props.movie.vote_average * 10}%{" "}
          </span>
          Release date: {props.movie.year || props.movie.first_air_date}
        </p>
        {/* <p className="modal__episode">
          {props.movie.number_of_episodes ? " Episodes: " + props.movie.number_of_episodes : ""}
          {props.movie.number_of_seasons ? " Seasons: " + props.movie.number_of_seasons : ""}
        </p> */}
        <p className="modal__overview">{props.movie.developer}</p>
        <a href = {url}>
          <button className="modal__btn modal__btn--red">
            <PlayIcon className="modal__btn--icon" />
            Play
          </button>
        </a>
        <button className="modal__btn">
          <AddIcon className="modal__btn--icon" />
          My List
        </button>
      </div>
    </Aux>
  );
}