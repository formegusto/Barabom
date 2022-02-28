import { Ref } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Spotify from '../assets/icon/Spotify_icon.png';
import { SpinAni, TitleAni } from '../lib/animations/CDanimations';
import musicutils from '../lib/musicutils';
import { RootStore } from '../stores';
import { userStore } from '../stores/user';
import { Item } from '../types/track';
import Spotify_Logo from '../assets/logo/Spotify_Logo_RGB_White.png';
import qs from 'qs';
// import SpotifyWebPlayer from 'react-spotify-web-playback/lib';

export type Props = {
  changeSearchState: (state: boolean) => void;
  item: Item | null;
  refCD: Ref<HTMLDivElement>;
};

function CDPlayer(props: Props) {
  const { user } = useSelector<RootStore, typeof userStore>(
    ({ UserReducer }) => UserReducer,
  );

  return user ? (
    <CDPStage className="cdp">
      {/* <SpotifyWebPlayer
        token={process.env.REACT_APP_SPOTIFY_KEY!}
        autoPlay
        uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
        play
      /> */}
      <CDPBlock>
        {props.item && (
          <TrackTitleBlock>
            <TrackTitle>{musicutils.getMusicAritst(props.item)}</TrackTitle>
          </TrackTitleBlock>
        )}

        <CDPTop className="realtop" />
        <CDPFront className="top">
          <CDTable onClick={() => props.changeSearchState(true)}>
            <CDPin />
            <CD ref={props.refCD}>
              <AlbumArt
                src={props.item ? props.item.album.images[0].url : Spotify}
                alt="AlbumArt"
              />
            </CD>
            <CDShadow />
          </CDTable>
        </CDPFront>
        <CDPBack className="top" />
        <CDPBottom className="bottom">
          <CDPStick>
            <CDPStickFront />
            <CDPStickLeft />
          </CDPStick>
        </CDPBottom>
      </CDPBlock>
    </CDPStage>
  ) : (
    <LoginNotifyBlock>
      <a
        href={
          'https://accounts.spotify.com/authorize?' +
          qs.stringify({
            response_type: 'code',
            client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
            scope: 'user-read-private user-read-email',
            redirect_uri: process.env.REACT_APP_SPOTIFY_CALLBACK,
            state: 'test',
          })
        }
      >
        <AuthButton>
          <img src={Spotify_Logo} alt="logo" />
        </AuthButton>
      </a>
      <Notify>Please Spotify Login</Notify>
    </LoginNotifyBlock>
  );
}

const Notify = styled.h6`
  margin: 6px 0 0;
  font-size: 12px;

  color: #999;
`;
const AuthButton = styled.div`
  & > img {
    display: block;

    width: 150px;
    height: 44.96px;
    background-color: black;
    padding: 8px;
    border-radius: 2rem;

    cursor: pointer;
  }

  &:hover {
    & > img {
      background-color: #666;
    }
  }
`;

const LoginNotifyBlock = styled.div`
  position: relative;
  z-index: 13;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const TrackTitleBlock = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 40px);
  width: 80px;
  overflow-x: hidden;

  transform: translateY(-15px);

  transform-style: preserve-3d;
`;

const TrackTitle = styled.h1`
  font-size: 10px;
  animation: ${TitleAni} 10.5s infinite linear;
  text-align: end;

  white-space: nowrap;
`;

const AlbumArt = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const CDPStickLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  width: 1000px;

  border: 1px solid #999;
  transform: rotateY(-90deg);
  transform-origin: 0% 50%;

  background: #999;
`;

const CDPStickFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 1000px;
  width: 10px;

  border: 1px solid #999;

  transform: rotateX(90deg);
  transform-origin: 50% 0%;

  background: #ccc;
`;

const CDPStick = styled.div`
  position: relative;

  width: 10px;
  height: 10px;

  transform-style: preserve-3d;
`;

const CDPStage = styled.div`
  position: relative;
  z-index: 13;
  perspective: 1000px;
`;

const CDPBlock = styled.div`
  position: relative;

  width: 100px;
  height: 100px;

  & div {
    box-sizing: border-box;
  }

  & > div {
    position: absolute;
  }

  & > .top {
    top: 0;
    left: 0;
  }

  & > .realtop {
    top: 0;
    right: calc(50% - 45px);
  }

  & > .bottom {
    bottom: 0;
    right: calc(50% - 45px);
  }
  transform: rotateY(20deg);

  transform-style: preserve-3d;
`;

const CDPTop = styled.div`
  width: 90px;
  height: 30px;

  transform-origin: 50% 50%;
  transform: rotateX(-90deg) translateZ(-15px);

  background-color: #333;
`;

const CDPBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 30px;

  transform-origin: 50% 50%;
  transform: rotateX(-90deg) translateZ(15px);

  background-color: #333;

  transform-style: preserve-3d;
`;

const CDPin = styled.div`
  top: calc(50% - 5px);
  left: calc(50% - 5px);

  width: 10px;
  height: 10px;

  background-color: black;
  border-radius: 100%;
  box-sizing: border-box;

  transform: translateZ(5px);
`;

const CD = styled.div`
  top: calc(50% - 37.5px);
  left: calc(50% - 37.5px);

  width: 75px;
  height: 75px;

  border: 1px solid black;
  border-radius: 100%;

  transform: translateZ(3px);

  background: white;

  overflow: hidden;

  &.play {
    animation: ${SpinAni} 1.5s infinite linear;
  }
`;

const CDShadow = styled.div`
  top: calc(50% - 37.5px);
  left: calc(50% - 37.5px);

  width: 75px;
  height: 75px;

  border: 1px solid black;
  border-radius: 100%;

  background: black;
`;

const CDTable = styled.div`
  cursor: pointer;
  position: relative;

  width: 80px;
  height: 80px;

  border: 1px solid black;
  border-radius: 100%;

  transform-style: preserve-3d;
  background: radial-gradient(circle at 100%, #fff 75%, #333 100%);

  & > div {
    position: absolute;
  }
`;

const CDPFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1px solid black;
  border-radius: 0.5rem;
  background-color: white;

  transform: translateZ(15px);

  transform-style: preserve-3d;
`;

const CDPBack = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid #333;
  border-radius: 0.5rem;

  transform: translateZ(-15px);

  background: #333;
`;

export default CDPlayer;
