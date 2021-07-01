import styled, { css } from 'styled-components';
import Spinner from './Spinner';

type Props = {
  lyrics: any;
  loading: boolean;
};

function Lyrics(props: Props) {
  return (
    <LyricsWrap>
      {props.loading ? (
        <Spinner />
      ) : (
        props.lyrics !== '' && (
          <LyricsBlock
            dangerouslySetInnerHTML={{ __html: props.lyrics }}
            loading={props.loading ? 'on' : 'off'}
          />
        )
      )}
    </LyricsWrap>
  );
}

const LyricsWrap = styled.div`
  position: relative;
  z-index: 13;

  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LyricsBlock = styled.div<{ loading: string }>`
  ${(props) =>
    props.loading === 'on' &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  width: 240px;
  height: 100px;

  overflow-y: scroll;
  text-align: center;

  font-size: 12px;
  line-height: 16px;
  color: #fff;

  text-shadow: 1px 1px 10px #333;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default Lyrics;
