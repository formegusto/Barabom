import { SagaAction } from '../../lib/careteRequestSaga';
import { User } from '../../types/user';
import { GET_USER, GET_USER_FAILURE, GET_USER_SUCCESS } from './types';
import * as userApi from '../../api/user';
import { takeLatest } from '@redux-saga/core/effects';
import { put } from '@redux-saga/core/effects';
import { finishLoading, startLoading } from '../loading/actions';
import { getUser } from './actions';
import { AxiosResponse } from 'axios';

function* getUserSaga(action: ReturnType<typeof getUser>) {
  yield put(startLoading(GET_USER));
  try {
    const response: AxiosResponse<User> = yield userApi.getUser(
      action.payload.access_token,
    );

    yield put<SagaAction<User | any>>({
      type: GET_USER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    const msg = e.response.data.error.message;
    if (action.payload.refresh_token === 'undefined')
      throw new Error('Need a New Login');
    if (msg === 'The access token expired') {
      try {
        let response: AxiosResponse<User | any> = yield userApi.refreshToken(
          action.payload.refresh_token,
        );
        const { access_token, refresh_token } = response.data;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);

        response = yield userApi.getUser(access_token);

        yield put<SagaAction<User | any>>({
          type: GET_USER_SUCCESS,
          payload: response.data,
        });
      } catch (e) {
        yield put<SagaAction<User | any>>({
          type: GET_USER_FAILURE,
          payload: e,
          error: true,
        });
      }
    }
  } finally {
    yield put(finishLoading(GET_USER));
  }
}

export default function* UserSage() {
  yield takeLatest(GET_USER, getUserSaga);
}
