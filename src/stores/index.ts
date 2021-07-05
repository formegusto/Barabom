import { combineReducers } from 'redux';
import SpotifyReducer from './spotify';
import LoadingReducer from './loading';
import UserReducer from './user';

const RootReducer = combineReducers({
  SpotifyReducer,
  LoadingReducer,
  UserReducer,
});

export type RootStore = ReturnType<typeof RootReducer>;

export default RootReducer;
