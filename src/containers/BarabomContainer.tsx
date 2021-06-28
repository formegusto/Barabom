import { useCallback, useState } from 'react';
import BarabomComponent from '../components/BarabomComponent';
import { Item } from '../types/track';

function BarabomContainer() {
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const [playItem, setPlayItem] = useState<Item | null>(null);

  const changeSearchState = useCallback((state: boolean) => {
    setOnSearch(state);
  }, []);

  const selectPlayItem = useCallback((item: Item) => {
    setOnSearch(false);
    setPlayItem(item);
  }, []);

  return (
    <BarabomComponent
      onSearch={onSearch}
      changeSearchState={changeSearchState}
      item={playItem}
      selectPlayItem={selectPlayItem}
    />
  );
}

export default BarabomContainer;
