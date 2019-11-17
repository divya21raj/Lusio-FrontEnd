import MovieGenre from './components/MovieGenre';
import React from 'react';

export function getMovieRows(movies, url) {
  const movieRow = movies.map((movie) => {
    // let movieImageUrl = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
    let movieImageUrl = movie.image;
    // if (url === "/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213") {
    //   movieImageUrl = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
    // }

    if (movie.image && movie.backdrop_path !== null) {
      url = "/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213"
      const movieComponent = <MovieGenre
        key={movie.image}
        url={url}
        posterUrl={movieImageUrl}
        movie={movie} />

      return movieComponent;
    }
  });

  return movieRow
}