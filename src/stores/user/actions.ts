import { createAction } from 'redux-actions';
import { GET_USER } from './types';

type Tokens = {
  access_token: string;
  refresh_token: string;
};
const getUser = createAction<Tokens, Tokens>(
  GET_USER,
  (token: Tokens) => token,
);

export { getUser };
