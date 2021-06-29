import createRequestSaga from '../../lib/careteRequestSaga';
import Track from '../../types/track';
import { GET_TRACKS, GET_TRACKS_APPEND, PLAY } from './types';
import * as api from '../../api/spotify';
import { takeLatest } from '@redux-saga/core/effects';

const getTrackSaga = createRequestSaga<{ q: string }, Track>(
  GET_TRACKS,
  api.getTracks,
);
const appendTrackSaga = createRequestSaga<{ q: string; offset: string }, Track>(
  GET_TRACKS_APPEND,
  api.getTracks,
);

const play = createRequestSaga<{ spotify_uri: string; device_id: string }, any>(
  PLAY,
  api.play,
);

export default function* SpotifySaga() {
  yield takeLatest(GET_TRACKS, getTrackSaga);
  yield takeLatest(PLAY, play);
  yield takeLatest(GET_TRACKS_APPEND, appendTrackSaga);
}
