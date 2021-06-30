import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

function Splash() {
  const [hiAni, setHiAni] = useState<boolean>(false);
  const refBall = useRef<HTMLDivElement>(null);

  useEffect(() => {
    refBall.current?.addEventListener('animationend', () => {
      setTimeout(() => setHiAni(true), 300);
    });
  }, []);

  return (
    <SplashBlock>
      <Title hiAni={hiAni}>
        <em className="hi">f</em>
        <em className="first" ref={refBall}>
          o
        </em>
        rmegust<em className="second">o</em>’s <em className="hi">C</em>reative{' '}
        <em className="hi">R</em>
        <em className="third">O</em>
        <em className="fourth">O</em>M
      </Title>
    </SplashBlock>
  );
}

const SplashBlock = styled.div`
  padding: 3rem;
  box-sizing: border-box;

  overflow-x: hidden;
`;

const BallAni = keyframes`
    50% {
      transform: translateY(-30px) scale(0.5);
    } 90% {
      transform: translateY(0) scale(0.5);  
    } 100% {
        transform: translateY(0) scale(1);  
    }
`;

const SayHi = keyframes`
    from {
        transform: rotateZ(0);
    } to {
        transform: rotateZ(-20deg);
    }
`;

const Title = styled.h1<{ hiAni: boolean }>`
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  & > em {
    display: inline-block;
  }

  & > em.hi {
    transform-origin: 50% 100%;
  }

  & > em:not(.hi) {
    animation: ${BallAni} 3s forwards;
  }

  & > .first {
    transform: translateY(-30px) translateX(-100px) scale(0.5);
  }

  & > .second {
    transform: translateY(-30px) translateX(600px) scale(0.5);
  }

  & > .third {
    transform: translateY(-30px) translateX(-800px) scale(0.5);
  }

  & > .fourth {
    transform: translateY(-30px) translateX(100px) scale(0.5);
  }

  ${(props) =>
    props.hiAni &&
    css`
      & > .hi {
        animation: ${SayHi} 0.7s infinite linear alternate;
      }
    `}
`;

export default Splash;
