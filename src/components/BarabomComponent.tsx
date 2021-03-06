import styled, { css, keyframes } from 'styled-components';
import CDPlayer from '../arts/CDPlayer';
import keonu from '../assets/keonu.jpg';
import SearchForm from '../atoms/SearchForm';
import { Props as SearchProps } from '../atoms/SearchForm';
import { Props as CDPlayProps } from '../arts/CDPlayer';
import Lyrics from '../atoms/Lyrics';

type Props = SearchProps &
  CDPlayProps & {
    lyrics: string;
    splashOkay: boolean;
    loading: boolean;
  };

function BarabomComponent(props: Props) {
  return (
    <Wrap>
      <ComfortBlock className="left" splashOkay={props.splashOkay}>
        <Line />
        <Comfort>LOOK</Comfort>
      </ComfortBlock>
      <BarabomWrap>
        <TitleBlock>
          <BarabomTtitle>Barabom</BarabomTtitle>
          <Copyright>copyright © iamformegusto</Copyright>
        </TitleBlock>
        <BarabomBlock>
          <BarabomShadow />
          <CDPZone>
            <CDPlayer
              changeSearchState={props.changeSearchState}
              item={props.item}
              refCD={props.refCD}
            />
          </CDPZone>
          <SearchForm
            onSearch={props.onSearch}
            changeSearchState={props.changeSearchState}
            selectPlayItem={props.selectPlayItem}
          />
          <Lyrics loading={props.loading} lyrics={props.lyrics} />
        </BarabomBlock>
      </BarabomWrap>
      <ComfortBlock className="right" splashOkay={props.splashOkay}>
        <Comfort>ONLY BEAUTY</Comfort>
        <Line />
      </ComfortBlock>
    </Wrap>
  );
}

const leftLineAni = keyframes`
  from {
    opacity:0;
    /* transform: rotateZ(-90deg); */
  } to {
    opacity:1;
    transform: translateX(484px);
    /* transform: rotateZ(0deg); */
  }
`;

const rightLineAni = keyframes`
  from {
    opacity:0;
    transform: rotateZ(0deg);
  } to {
    opacity: 1;
    transform: rotateZ(-90deg);
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;

  background-color: #000;
`;

const Comfort = styled.h2`
  font-style: normal;
  font-weight: normal;

  text-transform: uppercase;
`;

const ComfortBlock = styled.div<{ splashOkay: boolean }>`
  position: relative;
  z-index: 10;
  width: 500px;
  height: 500px;

  padding: 1rem 0;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  &.left {
    justify-content: flex-start;

    & > h2 {
      padding: 0 1rem 0 0;
      font-size: 64px;
      line-height: 78px;
      text-align: right;
    }

    ${(props) =>
      props.splashOkay &&
      css`
        transform-origin: 100% 0%;

        animation: ${leftLineAni} 0.7s linear forwards;
      `}
  }

  &.right {
    justify-content: flex-end;

    & > h2 {
      font-size: 48px;
      line-height: 59px;

      padding: 0.5rem;
      color: #999999;
    }

    ${(props) =>
      props.splashOkay &&
      css`
        transform-origin: 0% 100%;
        animation: ${rightLineAni} 0.7s linear forwards;
      `}
  }
`;

const TitleBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  z-index: 1;

  transform: translateX(-100px) translateY(-56px);

  & > * {
    text-align: right;
  }
`;

const Copyright = styled.h6`
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 10px;
  /* identical to box height */

  text-transform: lowercase;
`;

const BarabomTtitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 59px;
  /* identical to box height */

  text-transform: uppercase;

  color: #000000;
`;

const BarabomWrap = styled.div`
  position: relative;

  width: 500px;
  height: 500px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 100%;
  }
`;

const BarabomBlock = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;

  width: 500px;
  height: 500px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 100%;
  }

  background-image: url(${keonu});
  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;
`;

const BarabomShadow = styled.div`
  position: absolute;
  top: 0;
  height: 0;

  width: 100%;
  height: 100%;

  background: rgba(196, 196, 196, 0.4);
`;

const CDPZone = styled.div`
  position: relative;

  width: 210px;
  height: 500px;

  background: white;

  & > .cdp {
    position: absolute;
    top: 125px;
    left: calc(50% - 70px);
  }
`;

export default BarabomComponent;
