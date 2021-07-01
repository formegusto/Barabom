import { all } from '@redux-saga/core/effects';
import SpotifySaga from './spotify/saga';
import UserSage from './user/saga';

export default function* RootSaga() {
  yield all([SpotifySaga(), UserSage()]);
}
