import React from 'react'

export default function MovieGenreImage(props) {
   let lusioUrl = false;

   if (props.url === "https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213") {
      lusioUrl = true;
   }

   return (
      <div onClick={props.movieDetailsModal}
         className={"movieShowcase__container--movie" + (lusioUrl ? "__lusio" : "")}>
         <img src={props.posterUrl} className="movieShowcase__container--movie-image" />
      </div>
   );
}