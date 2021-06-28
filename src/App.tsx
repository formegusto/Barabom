import { useEffect } from 'react';
import { ConnectedProps } from 'react-redux';
import BarabomContainer from './containers/BarabomContainer';
import SpotifyConnector from './stores/spotify/connector';

function App({ injectPlayer }: ConnectedProps<typeof SpotifyConnector>) {
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
        console.log(state);
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

  return <BarabomContainer />;
}

export default SpotifyConnector(App);
