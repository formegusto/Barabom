import { handleActions } from 'redux-actions';
import { User } from '../../types/user';
import { GET_USER_FAILURE, GET_USER_SUCCESS } from './types';
import produce from 'immer';

type UserStore = {
  user: User | null;
  error: any;
};

export const userStore: UserStore = {
  user: null,
  error: null,
};

type Payload = User | any;

const UserReducer = handleActions<UserStore, Payload>(
  {
    [GET_USER_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload;
      }),
    [GET_USER_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.error = action.payload;
      }),
  },
  userStore,
);

export default UserReducer;
