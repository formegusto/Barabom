import { keyframes } from 'styled-components';

export const SpinAni = keyframes`
    from {
        transform: rotateZ(0deg) translateZ(3px);
    } to {
        transform: rotateZ(720deg) translateZ(3px);
    }
`;

export const TitleAni = keyframes`
    from {
        transform: translateX(300%);
    } to {
        transform: translateX(-200%);
    }
`;
