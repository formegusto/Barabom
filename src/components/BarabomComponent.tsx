import styled from "styled-components";
import CDPlayer from "../arts/CDPlayer";
import keonu from '../assets/keonu.jpg';

function BarabomComponent() {
    return (
        <BarabomBlock>
            <BarabomShadow />
            <CDPZone>
                <CDPlayer />
            </CDPZone>
        </BarabomBlock>
    );
}

const BarabomBlock = styled.div`
    position: relative;

    width: 500px;
    height: 500px;

    background-image: url(${keonu});
    background-repeat: no-repeat;
    background-size: cover;

    overflow: hidden;
`;

const BarabomShadow = styled.div`
    position: absolute;
    top: 0;
    height: 0;

    width: 100%;
    height: 100%;

    background: rgba(196, 196, 196, 0.4);
`;

const CDPZone = styled.div`
    position: relative;

    width: 210px;
    height: 500px;

    background: white;

    & > div {
        position: absolute;
        top: 125px;
        left: calc(50% - 70px);
    }
`

export default BarabomComponent;
