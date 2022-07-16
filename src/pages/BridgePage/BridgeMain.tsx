import styled from "styled-components"
import FormDescription from "./components/FormDescription"
import FormInput from "./components/FormInput"

function BridgeMain() {
    return (
        <MainContainer>
            <MainFormContainer>
                <FormInput title="Asset" />
                <FormInput title="From" />
                <FormInput title="Destination" />
                <FormInput title="Amount" />
                <FormDescription />
                <FormButton disabled>
                    Convert Now
                </FormButton>
            </MainFormContainer>
        </MainContainer>
    )
}

export default BridgeMain

const MainContainer = styled.main`
    width: 75%;
    height: auto;
    padding: 0 8px;
    background: transparent;
`

const MainFormContainer = styled.div`
    width: 100%;
    padding: 40px;
    background: white;
    border-radius: 8px;
`

const FormButton = styled.button`
    display: block;
    width: 100%;
    height: 64px;
    font-weight: 600;
    font-size: 15px;
    border-radius: 4px;
    box-shadow: 0 1px 16px rgb(13 127 233 / 40%);
    background-color: ${({theme}) => theme.color.COLOR_GREEN_ONE};
    border: none;
    color: #fff;
    :disabled {
        cursor: default;
        opacity: 0.5;
        pointer-events: none;
    }
`