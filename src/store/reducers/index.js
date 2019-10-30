import { combineReducers } from 'redux';
import TrendingReducer from './reducerTrending';
import LusioOriginalsReducer from './reducerLusioOriginals';
import TopRatedReducer from './reducerTopRated';
import ActionMoviesReducer from './reducerActionMovies';
import ComedyMoviesReducer from './reducerComedyMovies';
import HorrorMoviesReducer from './reducerHorrorMovies';
import RomanceMoviesReducer from './reducerRomanceMovies';
import DocumentaryReducer from './reducerDocumentary';


const rootReducer = combineReducers({
  trending: TrendingReducer,
  lusioOriginals: LusioOriginalsReducer,
  topRated: TopRatedReducer,
  action: ActionMoviesReducer,
  comedy: ComedyMoviesReducer,
  horror: HorrorMoviesReducer,
  romance: RomanceMoviesReducer,
  documentary: DocumentaryReducer
});

export default rootReducer;