import createActions from '../../lib/createActions';

export const [INJECT_PLAYER] = createActions('spotify/inject_player');
export const [GET_TRACKS, GET_TRACKS_SUCCESS, GET_TRACKS_FAILURE] =
  createActions('spotify/gettracks');
export const [
  GET_TRACKS_APPEND,
  GET_TRACKS_APPEND_SUCCESS,
  GET_TRACKS_APPEND_FAILURE,
] = createActions('spotify/gettracks/append');
export const [PLAY, PLAY_SUCCESS, PLAY_FAILURE] = createActions('spotify/play');
