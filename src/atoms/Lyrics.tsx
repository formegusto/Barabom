import styled from 'styled-components';

type Props = {
  lyrics: any;
};

function Lyrics(props: Props) {
  return (
    <LyricsWrap>
      <LyricsBlock dangerouslySetInnerHTML={{ __html: props.lyrics }} />
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

const LyricsBlock = styled.div`
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
