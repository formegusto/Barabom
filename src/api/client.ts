import axios from 'axios';

const APP_KEY = process.env.REACT_APP_SPOTIFY_KEY;
const client = axios.create();

client.defaults.headers['Authorization'] = `Bearer ${APP_KEY}`;

export default client;
