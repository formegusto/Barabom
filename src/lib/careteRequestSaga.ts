import { call, put } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { Action } from 'redux';
import { finishLoading, startLoading } from '../stores/loading/actions';

export interface SagaAction<Payload = any> extends Action<string> {
  payload: Payload;
  error?: boolean;
}

export default function createRequestSaga<P = any, AR = any>(
  type: string,
  request: (...params: P[]) => Promise<AxiosResponse<AR>>,
) {
  const SUCCESS = `${type}/success`;
  const FAILURE = `${type}/failure`;

  return function* (action: SagaAction<P>) {
    yield put(startLoading(type));
    try {
      const response: AxiosResponse<AR> = yield call(request, action.payload);

      yield put<SagaAction<AR>>({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put<SagaAction<AR>>({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
