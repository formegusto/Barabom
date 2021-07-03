import { useCallback, useEffect, useRef, useState } from 'react';
import { ConnectedProps } from 'react-redux';
import { getAliases } from '../api/musicbrainz';
import { getLyrics } from '../api/musixmatch';
import Splash from '../atoms/Splash';
import BarabomComponent from '../components/BarabomComponent';
import SpotifyConnector from '../stores/spotify/connector';
import { Item } from '../types/track';

function BarabomContainer({
  play,
  player,
  injectPlayer,
  user,
}: ConnectedProps<typeof SpotifyConnector>) {
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const [playItem, setPlayItem] = useState<Item | null>(null);
  const [loadingLyr, setLoadingLyr] = useState<boolean>(false);
  const [lyrics, setLyrics] = useState<string>('');
  const refCD = useRef<HTMLDivElement>(null);

  const [splashOkay, setSplayOkay] = useState<boolean>(false);

  const okaySplash = useCallback(() => {
    setSplayOkay(true);
  }, []);

  useEffect(() => {
    if (user) {
      (window as any).onSpotifyWebPlaybackSDKReady = () => {
        const token = `${localStorage.getItem('access_token')}`;
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

        player.addListener('not_ready', ({ device_id }: any) => {
          console.log('Device ID is not ready for playback', device_id);
        });

        // Connect to the player!
        player.connect();

        // Error Check
        player.on('initialization_error', ({ message }: any) => {
          console.error('Failed to initialize', message);
        });

        player.on('authentication_error', ({ message }: any) => {
          console.error('Failed to authenticate', message);
        });

        player.on('account_error', ({ message }: any) => {
          console.error('Failed to validate Spotify account', message);
        });

        player.on('playback_error', ({ message }: any) => {
          console.error('Failed to perform playback', message);
        });
      };

      const script = document.createElement('script');
      script.src = 'https://sdk.scdn.co/spotify-player.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [injectPlayer, user]);

  const changeSearchState = useCallback((state: boolean) => {
    setOnSearch(state);
  }, []);

  const changeLoading = useCallback((state: boolean) => {
    setLoadingLyr(state);
  }, []);

  const selectPlayItem = useCallback(
    async (item: Item) => {
      setOnSearch(false);
      setPlayItem(item);

      changeLoading(true);

      try {
        let check = await getLyrics(item.artists[0].name, item.name);
        console.log(check);
        if (check.length === 0) {
          const response = await getAliases(item.artists[0].name);
          if (response.data.artists.length !== 0) {
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
          }
        } else {
          setLyrics(check.lyrics.lyrics_body.replaceAll('\n', '<br/>'));
        }
      } catch (e) {
        console.error(e);
      }

      changeLoading(false);

      play({ spotify_uri: item.uri, device_id: player.device_id });
    },
    [play, player, changeLoading],
  );

  return (
    <>
      <Splash okaySplash={okaySplash} />
      <BarabomComponent
        onSearch={onSearch}
        changeSearchState={changeSearchState}
        item={playItem}
        selectPlayItem={selectPlayItem}
        refCD={refCD}
        lyrics={lyrics}
        splashOkay={splashOkay}
        loading={loadingLyr}
      />
    </>
  );
}

export default SpotifyConnector(BarabomContainer);
