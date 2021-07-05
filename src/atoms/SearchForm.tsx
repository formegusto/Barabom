import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ConnectedProps } from 'react-redux';
import styled, { css } from 'styled-components';
import { debounce } from 'underscore';
import Spotify_Logo from '../assets/logo/Spotify_Logo_RGB_Black.png';
import SpotifyConnector from '../stores/spotify/connector';
import { GET_TRACKS, GET_TRACKS_APPEND } from '../stores/spotify/types';
import { Item } from '../types/track';
import TextInput from './TextInput';
import TrackList from './TrackList';
import qs from 'qs';

export type Props = {
  onSearch: boolean;
  changeSearchState: (state: boolean) => void;
  selectPlayItem: (item: Item) => void;
};

function SearchForm({
  onSearch,
  changeSearchState,
  getTracks,
  appendTracks,
  tracks,
  selectPlayItem,
  loading,
}: Props & ConnectedProps<typeof SpotifyConnector>) {
  const [query, setQuery] = useState<string>('');
  const refList = useRef<HTMLDivElement>(null);

  const queryThrottle = useRef(
    debounce((q: string) => {
      if (q !== '') {
        console.log(`${q}로 지금요청`);
        getTracks(q);
        if (refList.current)
          refList.current.scrollTo({
            top: 0,
          });
      } else {
        console.log('요청 안합니다.');
      }
    }, 1000),
  );

  const onChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(value);
      queryThrottle.current(value);
    },
    [],
  );

  const onClose = useCallback(() => {
    setQuery('');
    changeSearchState(false);
  }, [changeSearchState]);

  const nextQuery = useCallback(
    function (this: HTMLDivElement) {
      /*
      console.log('offset', this.offsetHeight);
      console.log('scroll', this.scrollHeight);
      console.log('client', this.clientHeight);
      console.log('top', this.scrollTop);
      */
      if (this.scrollTop >= this.scrollHeight - this.offsetHeight - 80) {
        console.log('next Query', tracks);
        if (tracks?.next) {
          if (!(loading[GET_TRACKS] || loading[GET_TRACKS_APPEND])) {
            const nextObj = qs.parse(tracks.next.split('?')[1]) as any;
            appendTracks({
              q: nextObj.query,
              offset: nextObj.offset,
            });
          }
        }
      }
    },
    [tracks, appendTracks, loading],
  );

  const debounceNextQuery = useRef(debounce(nextQuery, 300));

  const injectEventListener = useCallback(() => {
    if (refList.current)
      refList.current.removeEventListener('scroll', debounceNextQuery.current);
    if (refList.current) {
      debounceNextQuery.current = debounce(nextQuery, 300);
      refList.current.addEventListener('scroll', debounceNextQuery.current);
    }
  }, [nextQuery]);

  useEffect(() => {
    injectEventListener();
  }, [injectEventListener]);

  return (
    <SearchBlock isOn={onSearch}>
      <SearchHeader>
        <img src={Spotify_Logo} alt="Spotify Logo" />
        <span onClick={onClose}>X</span>
      </SearchHeader>
      <InputBlock>
        <TextInput
          value={query}
          onChange={onChange}
          placeholder="Barabom Only Beauty"
          block
        />
      </InputBlock>
      <TrackList
        items={tracks?.items}
        selectPlayItem={selectPlayItem}
        loading={loading[GET_TRACKS] || loading[GET_TRACKS_APPEND]}
        refList={refList}
      />
    </SearchBlock>
  );
}

const SearchBlock = styled.div<{ isOn: boolean }>`
  display: flex;
  flex-flow: column;

  position: absolute;
  bottom: 0;
  left: calc(50% - 235px);

  z-index: 255;

  width: 470px;
  height: 470px;
  border-radius: 1rem 1rem 0 0;

  background: white;
  transform: translateY(500px);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  transition: cubic-bezier(0.24, 0.65, 0.38, 0.88) 0.7s;

  ${(props) =>
    props.isOn &&
    css`
      transform: translateY(10px);
    `}
`;

const InputBlock = styled.div`
  width: 100%;

  padding: 0 1.25rem;
  box-sizing: border-box;
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding: 1rem 1.25rem;
  box-sizing: border-box;

  & > img {
    width: 200px;
    height: 59.95px;
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

export default SpotifyConnector(SearchForm);
