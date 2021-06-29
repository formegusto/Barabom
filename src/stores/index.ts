import { combineReducers } from 'redux';
import SpotifyReducer from './spotify';
import LoadingReducer from './loading';

const RootReducer = combineReducers({
  SpotifyReducer,
  LoadingReducer,
});

export type RootStore = ReturnType<typeof RootReducer>;

export default RootReducer;
