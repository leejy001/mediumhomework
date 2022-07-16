import styled from "styled-components"

function CoinButton() {
    return (
        <ButtonContainer>
            <span>Select a coin</span><img src="/assets/i-carot.png" alt="caret icon" width={18} />
        </ButtonContainer>
    )
}

export default CoinButton

const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 2px;
    border: 1px solid ${({theme}) => theme.color.COLOR_GREEN_THREE};
    color: ${({theme}) => theme.color.COLOR_GREEN_ONE};
    padding: 12px 16px;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    :hover {
        transition: all 0.3s;
        background: ${({theme}) => theme.color.COLOR_LIGHT_GREEN};
    }
    :active {
        color: white;
    }
`