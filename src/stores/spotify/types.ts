import createActions from '../../lib/createActions';

export const [GET_TRACKS, GET_TRACKS_SUCCESS, GET_TRACKS_FAILURE] =
  createActions('spotify/gettracks');
