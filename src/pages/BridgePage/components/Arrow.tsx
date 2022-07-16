import styled from "styled-components"
import { move } from "../../../style/Animation"

function Arrow() {
    return <ArrowContainer><span>⇢</span></ArrowContainer>
}

export default Arrow

const ArrowContainer = styled.div`
    flex-shrink: 0;
    width: 80px;
    height: 28px;
    text-align: center;
    margin-bottom: 20px;
    span {
        animation: ${move} 1s infinite;
        position: relative;
        font-size: 28px;
        color: ${({theme}) => theme.color.COLOR_GREEN_ONE};
    }
`