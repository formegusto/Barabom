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
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CallbackComponent;
