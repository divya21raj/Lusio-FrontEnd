import React, { Component } from 'react'

import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';

export default class MovieGenre extends Component {
   state = {
      toggleModal: false
   }

   handleToggleModal = () => {
      this.setState({ toggleModal: true });
   }

   closeModal = () => {
      this.setState({ toggleModal: false })
   }

   render() {
      let lusioUrl = false;
      if (this.props.url === "/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213") {
         lusioUrl = true;
      }

      return (
         <>
            <div onClick={() => this.handleToggleModal()}
               className={"movieShowcase__container--movie" + (lusioUrl ? "__lusio" : "")}>
               <img src={this.props.posterUrl} className="movieShowcase__container--movie-image" />
            </div>
            <Modal show={this.state.toggleModal} movie={this.props.movie} modalClosed={this.closeModal}>
               <MovieDetails movie={this.props.movie} />
            </Modal>
         </>
      )
   }
}
