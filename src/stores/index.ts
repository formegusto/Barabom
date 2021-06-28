import { combineReducers } from 'redux';
import SpotifyReducer from './spotify';

const RootReducer = combineReducers({
  SpotifyReducer,
});

export type RootStore = typeof RootReducer;

export default RootReducer;
