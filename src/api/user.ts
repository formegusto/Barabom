import client from './client';
import qs from 'qs';

const api_url = process.env.REACT_APP_SPOTIFY_URL;
const account_url = process.env.REACT_APP_SPOTIFY_ACCOUNT_URL;

const getUser = (token: string) =>
  client.get(`${api_url}/v1/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const getToken = (code: string) =>
  client.post(
    `${account_url}/api/token`,
    qs.stringify({
      code: code,
      grant_type: 'authorization_code',
      redirect_uri:
        process.env.NODE_ENV === 'production'
          ? process.env.REACT_APP_SPOTIFY_CALLBACK_PRODUCTION!
          : process.env.REACT_APP_SPOTIFY_CALLBACK!,
      // redirect_uri: process.env.REACT_APP_SPOTIFY_CALLBACK,
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: process.env.REACT_APP_SPOTIFY_SECRET_ID!,
        password: process.env.REACT_APP_SPOTIFY_SECRET_KEY!,
      },
    },
  );

const refreshToken = (token: string) =>
  client.post(
    `${account_url}/api/token`,
    qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: token,
      client_id: process.env.REACT_APP_SPOTIFY_SECRET_ID,
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: process.env.REACT_APP_SPOTIFY_SECRET_ID!,
        password: process.env.REACT_APP_SPOTIFY_SECRET_KEY!,
      },
    },
  );

export { getUser, getToken, refreshToken };
