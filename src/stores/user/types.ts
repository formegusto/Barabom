import createActions from '../../lib/createActions';

export const [GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE] =
  createActions('users/get');
