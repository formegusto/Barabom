import createRequestSaga from '../../lib/careteRequestSaga';
import Track from '../../types/track';
import { GET_TRACKS, PLAY } from './types';
import * as api from '../../api/spotify';
import { takeLatest } from '@redux-saga/core/effects';

const getPostSaga = createRequestSaga<string, Track>(GET_TRACKS, api.getTracks);
const play = createRequestSaga<{ spotify_uri: string; device_id: string }, any>(
  PLAY,
  api.play,
);

export default function* SpotifySaga() {
  yield takeLatest(GET_TRACKS, getPostSaga);
  yield takeLatest(PLAY, play);
}
