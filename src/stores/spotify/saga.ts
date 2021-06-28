import createRequestSaga from '../../lib/careteRequestSaga';
import Track from '../../types/track';
import { GET_TRACKS } from './types';
import * as api from '../../api/spotify';
import { takeLatest } from '@redux-saga/core/effects';

const getPostSaga = createRequestSaga<string, Track>(GET_TRACKS, api.getTracks);

export default function* SpotifySaga() {
  yield takeLatest(GET_TRACKS, getPostSaga);
}
