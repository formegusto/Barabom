import { useCallback, useEffect, useRef, useState } from 'react';
import { ConnectedProps } from 'react-redux';
import { getAliases } from '../api/musicbrainz';
import { getLyrics } from '../api/musixmatch';
import BarabomComponent from '../components/BarabomComponent';
import SpotifyConnector from '../stores/spotify/connector';
import { Item } from '../types/track';

function BarabomContainer({
  play,
  player,
  injectPlayer,
}: ConnectedProps<typeof SpotifyConnector>) {
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const [playItem, setPlayItem] = useState<Item | null>(null);
  const [lyrics, setLyrics] = useState<string>('');
  const refCD = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      const token = `${process.env.REACT_APP_SPOTIFY_KEY}`;
      const player = new (window as any).Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: (cb: any) => {
          cb(token);
        },
      });

      // Playback status updates
      player.addListener('player_state_changed', (state: any) => {
        console.log(JSON.stringify(state));
        if (refCD.current) {
          if (state.paused) {
            refCD.current.classList.remove('play');
            setPlayItem(null);
          } else refCD.current.classList.add('play');
        }
      });

      // Ready
      player.addListener('ready', ({ device_id }: any) => {
        console.log('Ready with Device ID', device_id);

        player.device_id = device_id;
        injectPlayer(player);
      });

      // Connect to the player!
      player.connect();
    };
  }, [injectPlayer]);

  const changeSearchState = useCallback((state: boolean) => {
    setOnSearch(state);
  }, []);

  const selectPlayItem = useCallback(
    async (item: Item) => {
      setOnSearch(false);
      setPlayItem(item);

      let check = await getLyrics(item.artists[0].name, item.name);
      console.log(check);
      if (check.length === 0) {
        const response = await getAliases(item.artists[0].name);
        console.log(response.data.artists[0].aliases);
        const { aliases } = response.data.artists[0];

        for (const aliase of aliases) {
          check = await getLyrics(aliase['sort-name'], item.name);
          console.log(check);
          if (check.hasOwnProperty('lyrics')) {
            setLyrics(check.lyrics.lyrics_body.replaceAll('\n', '<br/>'));
            break;
          }
        }
      } else {
        setLyrics(check.lyrics.lyrics_body.replaceAll('\n', '<br/>'));
      }

      play({ spotify_uri: item.uri, device_id: player.device_id });
    },
    [play, player],
  );

  return (
    <BarabomComponent
      onSearch={onSearch}
      changeSearchState={changeSearchState}
      item={playItem}
      selectPlayItem={selectPlayItem}
      refCD={refCD}
      lyrics={lyrics}
    />
  );
}

export default SpotifyConnector(BarabomContainer);