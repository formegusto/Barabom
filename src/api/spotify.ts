import client from './client';
import qs from 'qs';
import Track from '../types/track';

const getTracks = (q: string) =>
  client.get<Track>(
    `/v1/search?${qs.stringify({
      query: q,
      type: 'track',
      market: 'KR',
      limit: 10,
      offset: 1,
    })}`,
  );

export { getTracks };
