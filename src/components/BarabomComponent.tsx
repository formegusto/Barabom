import styled from 'styled-components';
import CDPlayer from '../arts/CDPlayer';
import keonu from '../assets/keonu.jpg';
import SearchForm from '../atoms/SearchForm';
import { Props as SearchProps } from '../atoms/SearchForm';
import { Props as CDPlayProps } from '../arts/CDPlayer';

type Props = SearchProps & CDPlayProps;

function BarabomComponent(props: Props) {
  return (
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
  );
}

const BarabomBlock = styled.div`
  display: flex;
  position: relative;

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
