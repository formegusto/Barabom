import styled from 'styled-components';
import { Item } from '../types/track';
import ListItem from './ListItem';

type Props = {
  items?: Item[];
};

function TrackList({ items }: Props) {
  return (
    <TrackListBlock>
      {items?.map((item, idx) => (
        <ListItem key={idx} item={item} />
      ))}
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

export default TrackList;
