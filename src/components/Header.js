import React from 'react';
import { Link } from "react-router-dom"; 

import PlayLogo from '../static/images/play-button.svg';
import AddLogo from '../static/images/add.svg';


export default function Header(props) {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(${props.movie.bg})`,
    backgroundPosition: "center",
  }

  var url = "http://localhost:8082/?game=" + props.movie.title; 
  return (
    <header style={backgroundStyle} className="header">
      <div className="header__container">
        <h1 className="header__container-heading">{props.movie.title}</h1>
        
        <a href={url}>
          <button className="header__container-btnPlay">
            <PlayLogo className="header__container-btnMyList-play" />
            Play
          </button>
        </a>

        <button className="header__container-btnMyList">
          <AddLogo className="header__container-btnMyList-add" />
          My List
        </button>
        <p className="header__container-overview">{props.movie.overview}</p>
      </div>
      <div className="header--fadeBottom"></div>
    </header>
  )
}