import styled from 'styled-components';
import 'holderjs';
import { Item } from '../types/track';
import timeutils from '../lib/timeutils';

type Props = {
  item: Item;
  selectPlayItem: (item: Item) => void;
};

function ListItem({ item, selectPlayItem }: Props) {
  return (
    <ListBlock onClick={() => selectPlayItem(item)}>
      <img
        className="albumart"
        src={item.album.images[0].url}
        alt="albumarts"
      ></img>
      <span></span>
      <span className="track">
        <h1 className="title">{item.name}</h1>
        <h5 className="artist">{item.artists[0].name}</h5>
      </span>
      <span className="duration">{timeutils.msToString(item.duration_ms)}</span>
    </ListBlock>
  );
}

const ListBlock = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;

  padding: 0.75rem 0;
  cursor: pointer;

  & > img {
    width: 64px;
    height: 64px;
    margin: 0 0.75rem 0 0;
  }

  & > .track {
    flex: 1;

    & > .title {
      font-size: 16px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 24px;
      text-transform: none;

      color: #333;
    }

    & > .artist {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 16px;
      text-transform: none;

      color: #555;
    }
  }

  & > .duration {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 16px;
    text-transform: none;

    color: #777;
  }
`;

export default ListItem;
