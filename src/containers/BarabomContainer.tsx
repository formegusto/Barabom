import { useCallback, useState } from 'react';
import { ConnectedProps } from 'react-redux';
import BarabomComponent from '../components/BarabomComponent';
import SpotifyConnector from '../stores/spotify/connector';
import { Item } from '../types/track';

function BarabomContainer({
  play,
  player,
}: ConnectedProps<typeof SpotifyConnector>) {
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const [playItem, setPlayItem] = useState<Item | null>(null);

  const changeSearchState = useCallback((state: boolean) => {
    setOnSearch(state);
  }, []);

  const selectPlayItem = useCallback(
    (item: Item) => {
      setOnSearch(false);
      setPlayItem(item);
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
    />
  );
}

export default SpotifyConnector(BarabomContainer);
