import styled from 'styled-components';
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
          <LyricsBlock dangerouslySetInnerHTML={{ __html: props.lyrics }} />
        )
      )}
    </LyricsWrap>
  );
}

const LyricsWrap = styled.div`
  position: absolute;
  bottom: 150px;

  z-index: 13;

  flex: 1;

  width: 240px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LyricsBlock = styled.div`
  padding: 0.5rem 0;

  box-sizing: border-box;

  text-align: center;

  font-size: 12px;
  line-height: 16px;
  color: #333;

  width: 100%;
  height: 100%;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default Lyrics;
