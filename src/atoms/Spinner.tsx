import styled, { keyframes } from 'styled-components';

function Spinner() {
  return <SpinnerDiv />;
}

const ani = keyframes`
    from {
        transform: rotateZ(0deg);
    } to {
        transform: rotateZ(360deg);
    }
`;

const SpinnerDiv = styled.div`
  margin: 0 auto;
  width: 30px;
  height: 30px;

  border: 5px solid #fff;
  border-top: 5px solid #333;

  border-radius: 100%;
  animation: ${ani} 1s infinite linear;
`;

export default Spinner;
