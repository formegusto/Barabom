import { keyframes } from 'styled-components';

export const SpinAni = keyframes`
    from {
        transform: rotateZ(0deg) translateZ(3px);
    } to {
        transform: rotateZ(720deg) translateZ(3px);
    }
`;
