import axios from '../../axios-movies';

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_LUSIO_ORIGINALS = 'FETCH_LUSIO_ORIGINALS';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES';
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES';
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES';

const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';

export function fetchTrending() {
  const request = axios.get(`/games/`);

  return {
    type: FETCH_TRENDING,
    payload: request
  }
}

export function fetchLusioOriginals() {
  const request = axios.get(`/recommend/?input_id=T241`);

  return {
    type: FETCH_LUSIO_ORIGINALS,
    payload: request
  }
}

export function fetchTopRated() {
  const request = axios.get(`/games/`)

  return {
    type: FETCH_TOP_RATED,
    payload: request
  }
}

export function fetchActionMovies() {
  const request = axios.get(`/games/`)

  return {
    type: FETCH_ACTION_MOVIES,
    payload: request
  }
}

export function fetchComedyMovies() {
  const request = axios.get(`/games/`)

  return {
    type: FETCH_COMEDY_MOVIES,
    payload: request
  }
}

export function fetchHorrorMovies() {
  const request = axios.get(`/games/`)

  return {
    type: FETCH_HORROR_MOVIES,
    payload: request
  }
}

export function fetchRomanceMovies() {
  const request = axios.get(`/recommend/?input_id=T241`)

  return {
    type: FETCH_ROMANCE_MOVIES,
    payload: request
  }
}

export function fetchDocumentaries() {
  const request = axios.get(`/games/`)

  return {
    type: FETCH_DOCUMENTARIES,
    payload: request
  }
}