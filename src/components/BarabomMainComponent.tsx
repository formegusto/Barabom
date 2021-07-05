import styled from 'styled-components';
import CDPlayer from '../arts/CDPlayer';
import SearchForm from '../atoms/SearchForm';
import { Props as SearchProps } from '../atoms/SearchForm';
import { Props as CDPlayProps } from '../arts/CDPlayer';
import Lyrics from '../atoms/Lyrics';
import { MobileView } from 'react-device-detect';

type Props = SearchProps &
  CDPlayProps & {
    lyrics: string;
    splashOkay: boolean;
    loading: boolean;
  };

function BarabomMainComponent(props: Props) {
  return (
    <BarabomWrap>
      <TitleBlock>
        <BarabomTtitle>Barabom</BarabomTtitle>
        <Copyright>copyright © iamformegusto</Copyright>
        <MobileView>
          <MobileNotSupported>Mobile not supported</MobileNotSupported>
        </MobileView>
      </TitleBlock>
      <BarabomBlock>
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
  );
}

const MobileNotSupported = styled.h6`
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 10px;
  color: #ccc;
  margin: 0.25rem 0;
  /* identical to box height */

  text-transform: lowercase;
`;

const TitleBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media ${({ theme }) => theme.device.mobile} {
    position: static;
    margin: 0 1rem 0 0;
  }

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
  display: flex;
  flex-direction: column;
  position: relative;

  width: 500px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100vw;
  }
`;

const BarabomBlock = styled.div`
  position: relative;
  display: flex;

  width: 500px;
  height: 500px;

  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const CDPZone = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: 500px;
  height: 500px;

  background: white;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }

  & > .cdp {
    position: absolute;
    top: 125px;
    left: calc(50% - 50px);

    @media ${({ theme }) => theme.device.mobile} {
      top: 100px;
      left: calc(50% - 50px);
      width: 100%;
    }
  }
`;

export default BarabomMainComponent;
