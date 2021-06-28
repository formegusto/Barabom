import { createAction } from 'redux-actions';
import { GET_TRACKS } from './types';

export const getTracks = createAction<string, string>(
  GET_TRACKS,
  (q: string) => q,
);
