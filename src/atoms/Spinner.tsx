import styled, { keyframes } from 'styled-components';

type Props = {
  color?: string;
};

function Spinner(props: Props) {
  return <SpinnerDiv {...props} />;
}

const ani = keyframes`
    from {
        transform: rotateZ(0deg);
    } to {
        transform: rotateZ(360deg);
    }
`;

const SpinnerDiv = styled.div<Props>`
  margin: 0 auto;
  width: 30px;
  height: 30px;

  border: 5px solid transparent;
  border-top: 5px solid ${(props) => (props.color ? props.color : '#333')};

  border-radius: 100%;
  animation: ${ani} 1s infinite linear;
`;

export default Spinner;
