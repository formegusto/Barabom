import client from './client';

const url = process.env.REACT_APP_SPOTIFY_URL;

const getUser = (token: string) =>
  client.get(`${url}/v1/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export { getUser };
