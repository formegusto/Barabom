import styled, { css } from 'styled-components';
import Spotify_Logo from '../assets/logo/Spotify_Logo_RGB_Black.png';

export type Props = {
  onSearch: boolean;
  changeSearchState: (state: boolean) => void;
};

function SearchForm(props: Props) {
  return (
    <SearchBlock on={props.onSearch}>
      <SearchHeader>
        <img src={Spotify_Logo} alt="Spotify Logo" />
        <span onClick={() => props.changeSearchState(false)}>X</span>
      </SearchHeader>
    </SearchBlock>
  );
}

const SearchBlock = styled.div<{ on?: boolean }>`
  position: absolute;
  bottom: 0;
  left: calc(50% - 235px);

  width: 470px;
  height: 470px;
  border-radius: 1rem 1rem 0 0;

  background: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(500px);
  transition: cubic-bezier(0.24, 0.65, 0.38, 0.88) 0.7s;

  overflow-y: scroll;

  ${(props) =>
    props.on &&
    css`
      transform: translateY(0);
    `}
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding: 1rem 1.25rem;
  box-sizing: border-box;

  & > img {
    width: 200px;
    height: auto;
  }

  & > span {
    cursor: pointer;

    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;

    color: #666;

    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }

  & > span:hover {
    color: #333;
  }
`;

export default SearchForm;
