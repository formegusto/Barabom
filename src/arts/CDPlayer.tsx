import styled from "styled-components";

function CDPlayer() {
    return <CDPStage>
        <CDPBlock>
            <CDPFront className="top">
                <CDTable>
                    <CDPin/>
                    <CD/>
                    <CDShadow />
                </CDTable>
            </CDPFront>
            <CDPBack className="top"/>
            <CDPBottom className="bottom"/>
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
    }

    & > .top {
        top: 0;
        left:0;
    }

    & > .bottom {
        bottom: 0;
        left: 0;
    }
    transform: rotateY(20deg);

    transform-style: preserve-3d;
`;

const CDPBottom = styled.div`
    width: 100%;
    height: 30px;

    transform-origin: 50% 50%;
    transform: rotateX(-90deg) translateZ(15px);
`;

const CDPin = styled.div`
    top: calc(50% - 5px);
    left: calc(50% - 5px);
    
    width: 10px;
    height: 10px;

    background-color: black;
    border-radius: 100%;
    box-sizing: border-box;

    transform: translateZ(5px);
`;

const CD = styled.div`
    top: calc(50% - 37.5px);
    left: calc(50% - 37.5px);

    width: 75px;
    height: 75px;

    border: 1px solid black;
    border-radius: 100%;

    transform: translateZ(3px);

    background: white;
`;

const CDShadow = styled.div`
    top: calc(50% - 37.5px);
    left: calc(50% - 37.5px);

    width: 75px;
    height: 75px;

    border: 1px solid black;
    border-radius: 100%;

    background: black;
`;

const CDTable = styled.div`
    position: relative;

    width: 80px;
    height: 80px;

    border: 1px solid black;
    border-radius: 100%;

    transform-style: preserve-3d;
    background: radial-gradient(circle at 100%,#FFF 75%,#333 100%);

    & > div {
        position: absolute;
    }
`;

const CDPFront = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    border: 1px solid black;
    border-radius: .5rem;
    background-color: white;

    transform: translateZ(15px);

    transform-style: preserve-3d;
`

const CDPBack = styled.div`
    width: 100%;
    height: 100%;

    border: 1px solid black;
    border-radius: .5rem;

    transform: translateZ(-15px);
`;

export default CDPlayer;