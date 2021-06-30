import client from './client';
import qs from 'qs';
import Track from '../types/track';

const token = process.env.REACT_APP_SPOTIFY_KEY;
const url = process.env.REACT_APP_SPOTIFY_URL;

const getTracks = ({ q, offset = 1 }: any) =>
  client.get<Track>(
    `${url}/v1/search?${qs.stringify({
      query: q,
      type: 'track',
      market: 'US',
      limit: 10,
      offset: offset,
    })}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

const play = ({ spotify_uri, device_id }: any) =>
  client.put(
    `${url}/v1/me/player/play?${qs.stringify({ device_id })}`,
    {
      uris: [spotify_uri],
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );

export { getTracks, play };
