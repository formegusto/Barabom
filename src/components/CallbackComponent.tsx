import styled from 'styled-components';
import Spinner from '../atoms/Spinner';

function CallbackComponent() {
  return (
    <CallbackScreen>
      <Spinner />
    </CallbackScreen>
  );
}

const CallbackScreen = styled.div`
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;
`;

export default CallbackComponent;
