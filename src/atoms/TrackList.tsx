import { Ref } from 'react';
import styled from 'styled-components';
import { Item } from '../types/track';
import ListItem from './ListItem';
import Spinner from './Spinner';

type Props = {
  items?: Item[];
  selectPlayItem: (item: Item) => void;
  loading?: boolean;
  refList: Ref<HTMLDivElement>;
};

function TrackList({ items, selectPlayItem, loading, refList }: Props) {
  return (
    <TrackListBlock ref={refList}>
      {items?.map((item, idx) => (
        <ListItem key={idx} item={item} selectPlayItem={selectPlayItem} />
      ))}
      {loading && (
        <LoadingBlock>
          <Spinner />
        </LoadingBlock>
      )}
    </TrackListBlock>
  );
}

const TrackListBlock = styled.div`
  flex: 1;

  box-sizing: border-box;
  padding: 0 1.75rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const LoadingBlock = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0.75rem 0;
  box-sizing: border-box;
`;

export default TrackList;
