import { createAction } from 'redux-actions';
import { GET_TRACKS, INJECT_PLAYER, PLAY } from './types';

export const injectPlayer = createAction<any, any>(
  INJECT_PLAYER,
  (player: any) => player,
);

export const getTracks = createAction<string, string>(
  GET_TRACKS,
  (q: string) => q,
);

export const play = createAction<any, any>(
  PLAY,
  ({ ...params }: any) => params,
);
