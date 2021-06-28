import styled from "styled-components";

function CDPlayer() {
    return <CDPStage>
        <CDPBlock>
            <CDPFront/>
            <CDPBack/>
        </CDPBlock>
    </CDPStage>;
}

const CDPStage = styled.div`
    perspective: 1000px;   
`

const CDPBlock = styled.div`
    position: relative;

    width: 100px;
    height: 100px;

    & div {
        box-sizing: border-box;
    }

    & > div {
        position: absolute;
        top: 0;
        left:0;
    }
    transform: rotateY(20deg);

    transform-style: preserve-3d;
`;

const CDPFront = styled.div`
    width: 100%;
    height: 100%;

    border: 1px solid black;
    border-radius: .5rem;
    background-color: white;

    transform: translateZ(15px);
`

const CDPBack = styled.div`
    width: 100%;
    height: 100%;

    border: 1px solid black;
    border-radius: .5rem;

    transform: translateZ(-15px);
`;

export default CDPlayer;