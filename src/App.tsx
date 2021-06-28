import { useEffect } from 'react';
import BarabomContainer from './containers/BarabomContainer';

function App() {
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
      });

      // Connect to the player!
      player.connect();
    };
  }, []);

  return <BarabomContainer />;
}

export default App;
