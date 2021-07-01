import createRequestSaga from '../../lib/careteRequestSaga';
import { User } from '../../types/user';
import { GET_USER } from './types';
import * as userApi from '../../api/user';
import { takeLatest } from '@redux-saga/core/effects';

const getUserSaga = createRequestSaga<string, User>(GET_USER, userApi.getUser);

export default function* UserSage() {
  yield takeLatest(GET_USER, getUserSaga);
}
