import styled from 'styled-components';
import CDPlayer from '../arts/CDPlayer';
import keonu from '../assets/keonu.jpg';
import SearchForm from '../atoms/SearchForm';
import { Props as SearchProps } from '../atoms/SearchForm';
import { Props as CDPlayProps } from '../arts/CDPlayer';

type Props = SearchProps & CDPlayProps;

function BarabomComponent(props: Props) {
  return (
    <Wrap>
      <ComfortBlock>
        <Line />
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
        </BarabomBlock>
      </BarabomWrap>
      <ComfortBlock>
        <Line />
      </ComfortBlock>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;

  background-color: #000;
`;

const ComfortBlock = styled.div`
  width: 500px;
  height: 500px;
`;

const TitleBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  z-index: 1;

  transform: translateX(-100px) translateY(-36px);

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
`;

const BarabomBlock = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;

  width: 500px;
  height: 500px;

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
