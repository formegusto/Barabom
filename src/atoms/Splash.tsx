import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

type Props = {
  okaySplash: () => void;
};

function Splash(props: Props) {
  const [hiAni, setHiAni] = useState<boolean>(false);
  const refBall = useRef<HTMLDivElement>(null);
  const refText = useRef<HTMLEmbedElement>(null);
  const refScreen = useRef<HTMLDivElement>(null);

  useEffect(() => {
    refBall.current?.addEventListener('animationend', () => {
      setTimeout(() => setHiAni(true), 300);
    });

    refText.current?.addEventListener('animationend', () => {
      console.log('refText animation end');
      if (refScreen.current) {
        refScreen.current.style.transform = 'translateY(100vh)';
        props.okaySplash();
      }
    });
  }, [props]);

  return (
    <SplashBlock ref={refScreen}>
      <Title hiAni={hiAni}>
        <em className="hi" ref={refText}>
          f
        </em>
        <em className="first" ref={refBall}>
          o
        </em>
        rmegust<em className="second">o</em>’s <em className="hi">T</em>
        <em className="third">O</em>Y <em className="hi">B</em>
        <em className="fourth">O</em>X
      </Title>
    </SplashBlock>
  );
}

const SplashBlock = styled.div`
  z-index: 255;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  padding: 3rem;
  box-sizing: border-box;

  overflow-x: hidden;

  transition: 0.7s;
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
        animation: ${SayHi} 0.7s 4 linear alternate forwards;
      }
    `}
`;

export default Splash;
