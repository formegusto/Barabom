import { all } from '@redux-saga/core/effects';
import SpotifySaga from './spotify/saga';

export default function* RootSaga() {
  yield all([SpotifySaga()]);
}
