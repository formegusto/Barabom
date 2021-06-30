import ms from 'musixmatch';

const key = process.env.REACT_APP_MUSIXMATCH_KEY;

const music = ms({ apikey: key });
console.log();

const getLyrics = (q_artist: string, q_track: string) =>
  music.matcherLyrics({ q_artist, q_track });

export { getLyrics };
