import { handleActions } from 'redux-actions';
import { FINISH_LOADING, START_LOADING } from './types';

export type LoadingStore = {
  [key: string]: boolean;
};

export const loadingStore: LoadingStore = {};

const LoadingReducer = handleActions<LoadingStore, string>(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  loadingStore,
);

export default LoadingReducer;
