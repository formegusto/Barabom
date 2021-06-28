import styled from 'styled-components';
import ListItem from './ListItem';

function TrackList() {
  return (
    <TrackListBlock>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
        <ListItem key={idx} />
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
