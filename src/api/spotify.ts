import axios from 'axios';
import qs from 'qs';

const APPKEY = process.env.REACT_APP_SPOTIFY_KEY;

const getTracks = (q: string) =>
  axios.get<any>(
    `https://api.spotify.com/v1/search?${qs.stringify({
      query: q,
      type: 'track',
      market: 'KR',
      limit: 10,
      offset: 5,
    })}`,
    {
      headers: {
        Authorization: `Bearer ${APPKEY}`,
      },
    },
  );

export { getTracks };
