import client from './client';
import qs from 'qs';
import Track from '../types/track';

const getTracks = ({ q, offset = 1 }: any) =>
  client.get<Track>(
    `/v1/search?${qs.stringify({
      query: q,
      type: 'track',
      market: 'KR',
      limit: 10,
      offset: offset,
    })}`,
  );

const play = ({ spotify_uri, device_id }: any) =>
  client.put(
    `/v1/me/player/play?${qs.stringify({ device_id })}`,
    {
      uris: [spotify_uri],
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

export { getTracks, play };
