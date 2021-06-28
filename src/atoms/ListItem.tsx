import styled from 'styled-components';
import 'holderjs';

function ListItem() {
  return (
    <ListBlock>
      <img className="albumart" src="holder.js/60x60" alt="albumarts"></img>
      <span className="track">
        <h1 className="title">Title</h1>
        <h5 className="artist">Artist</h5>
      </span>
      <span className="duration">3:20</span>
    </ListBlock>
  );
}

const ListBlock = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  padding: 0.75rem 0;

  & > img {
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
