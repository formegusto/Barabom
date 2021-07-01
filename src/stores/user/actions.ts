import { createAction } from 'redux-actions';
import { GET_USER } from './types';

const getUser = createAction<string, string>(
  GET_USER,
  (token: string) => token,
);

export { getUser };
