import styled from "styled-components";
import Contianer from "../../common/Container";
import BridgeMain from "./BridgeMain";
import BridgeTutorial from "./BridgeTutorial";

function Index() {
    return (
        <Contianer>
            <MainTitle><span>Opening a new way between cryptocurrencies.</span></MainTitle>
            <BridgeInfoWrapper>
                <BridgeTutorial />
                <BridgeMain />
            </BridgeInfoWrapper>
        </Contianer>
    )
}

export default Index;

const MainTitle = styled.div`
    padding: 0 16px;
    margin-bottom: 32px; 
    span {
        position: relative;
        margin-left: 262px;
        padding: 0 8px;
        color: white;
        font-size: 32px;
        font-weight: 700;
        ::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 1px;
            width: 100%;
            height: 16px;
            background: ${({theme}) => theme.color.COLOR_DARK_GREEN};
            opacity: 0.4;
        }
    }
`

const BridgeInfoWrapper = styled.div`
    display: flex;
`