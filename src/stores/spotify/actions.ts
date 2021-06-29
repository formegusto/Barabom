import { createAction } from 'redux-actions';
import { GET_TRACKS, GET_TRACKS_APPEND, INJECT_PLAYER, PLAY } from './types';

export const injectPlayer = createAction<any, any>(
  INJECT_PLAYER,
  (player: any) => player,
);

export const getTracks = createAction<{ q: string }, string>(
  GET_TRACKS,
  (q: string) => ({
    q,
  }),
);

export const appendTracks = createAction<
  { q: string; offset: number },
  { q: string; offset: number }
>(GET_TRACKS_APPEND, ({ ...params }) => ({ ...params }));

export const play = createAction<any, any>(
  PLAY,
  ({ ...params }: any) => params,
);
