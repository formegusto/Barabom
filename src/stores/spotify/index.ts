import { handleActions } from 'redux-actions';
import Track, { Tracks } from '../../types/track';
import { GET_TRACKS_FAILURE, GET_TRACKS_SUCCESS } from './types';
import produce from 'immer';

export type SpotifyStore = {
  tracks: Tracks | null;
};

const spotifyStore: SpotifyStore = {
  tracks: null,
};

type Payload = Track | null;

const SpotifyReducer = handleActions<SpotifyStore, Payload>(
  {
    [GET_TRACKS_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.tracks = action.payload!.tracks;
      }),
    [GET_TRACKS_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.tracks = null;
      }),
  },
  spotifyStore,
);

export default SpotifyReducer;
