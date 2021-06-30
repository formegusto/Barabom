import { Musicbrainz } from '../types/musicbrainz';
import client from './client';

const url = process.env.REACT_APP_MUSICBRAINZ_URL;

const getAliases = (alias: string) =>
  client.get<Musicbrainz>(`${url}/artist?query=alias:${alias}&fmt=json`);

export { getAliases };
