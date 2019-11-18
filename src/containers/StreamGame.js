import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';


class StreamGame extends Component {

  state = {
    /** Toggles the movie list when the user starts typing. */
    toggleMovieList: true,
    /** An array that will hold all of our movie Components. */
    MovieList: [],
    /** Toggles the modal when a movie is clicked. */
    toggleModal: false,
    /** Holds the movie information for a single movie. */
    movieOverview: {},
  }
  /** Get the user input  */
  onSearchHandler = (event) => {
    /** Display the movie list. */
    this.setState({
      toggleMovieList: false
    });

    const userInput = event.target.value;
    /** Pass in the user input to make the API call. */
    // this.makeAipCall(userInput);

    /** If the input is empty don't display the movie list. */
    if (userInput === "") {
      this.setState({
        toggleMovieList: true
      });
    }
  }

  componentDidMount = () => {
    
  };

  render() {
    return (
      <div className="container">
        <Navbar showMovies={this.onSearchHandler} />
        {
          // this.state.toggleMovieList ? <MainContent /> : 
          <div
            className="search-container">{this.state.MovieList}</div>
        }

        <Modal show={this.state.toggleModal}
          modalClosed={this.closeModal}
          movie={this.state.movieOverview}>

          <MovieDetails movie={this.state.movieOverview} />
        </Modal>

        <Footer />
      </div>
    );
  }
}

export default StreamGame; 