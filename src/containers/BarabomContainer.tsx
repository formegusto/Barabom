import { useCallback, useState } from 'react';
import BarabomComponent from '../components/BarabomComponent';

function BarabomContainer() {
  const [onSearch, setOnSearch] = useState<boolean>(false);

  const changeSearchState = useCallback((state: boolean) => {
    setOnSearch(state);
  }, []);

  return (
    <BarabomComponent
      onSearch={onSearch}
      changeSearchState={changeSearchState}
    />
  );
}

export default BarabomContainer;
