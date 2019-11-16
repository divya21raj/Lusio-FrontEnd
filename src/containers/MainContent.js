import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

import TrendingMovies from './TrendingMovies';
import LusioOriginals from './LusioOriginals';
import TopRated from './TopRated';
import ActionMovies from './ActionMovies';
import ComedyMovies from './ComedyMovies';
import HorrorMovies from './HorrorMovies';
import RomanceMovies from './RomanceMovies';
import Documentaries from './Documentaries';


class MainContent extends Component {

  state = {
    /** Will hold our chosen movie to display on the header */
    selectedMovie: {}
  };

  componentDidMount = () => {
    this.getMovie();
  };


  getMovie = () => {
    /** Movie Id for the Narcos series  */
    const movieId = 63351;
    /** Make Api call to retrieve the details for a single movie  */
    const url = `https://4a763f1a.ngrok.io/game/?game_id=T024`;
    axios
      .get(url)
      .then(res => {
        const movieData = res.data;
        console.log(movieData)
        this.setState({ selectedMovie: movieData });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <Header movie={this.state.selectedMovie} />
        <div className="movieShowcase">
          <LusioOriginals />
          <TrendingMovies />
          <TopRated />
          <ActionMovies />
          <ComedyMovies />
          {/* <HorrorMovies /> */}
          <Documentaries />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainContent; 