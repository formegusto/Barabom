import { handleActions } from 'redux-actions';
import Track, { Tracks } from '../../types/track';
import {
  GET_TRACKS_APPEND_SUCCESS,
  GET_TRACKS_FAILURE,
  GET_TRACKS_SUCCESS,
  INJECT_PLAYER,
} from './types';
import produce from 'immer';

export type SpotifyStore = {
  tracks: Tracks | null;
  player: any;
};

const spotifyStore: SpotifyStore = {
  tracks: null,
  player: null,
};

type Payload = Track | any;

const SpotifyReducer = handleActions<SpotifyStore, Payload>(
  {
    [INJECT_PLAYER]: (state, action) =>
      produce(state, (draft) => {
        draft.player = action.payload;
      }),
    [GET_TRACKS_APPEND_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.tracks = {
          ...action.payload.tracks,
          items: draft.tracks?.items.concat(action.payload.tracks.items),
        };
      }),
    [GET_TRACKS_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.tracks = action.payload.tracks;
      }),
    [GET_TRACKS_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.tracks = null;
      }),
  },
  spotifyStore,
);

export default SpotifyReducer;
