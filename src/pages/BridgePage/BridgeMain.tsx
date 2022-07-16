import styled from "styled-components"
import DropDown from "../../common/DropDown"
import Input from "../../common/Input"
import { fadeInLeft } from "../../style/Animation"
import Arrow from "./components/Arrow"
import CoinButton from "./components/CoinButton"
import FormDescription from "./components/FormDescription"
import FormInput from "./components/FormInput"

const Percent = [
    {id: 1, content: 'MAX'},
    {id: 2, content: '50%'},
    {id: 3, content: '25%'},
    {id: 4, content: '10%'},
    {id: 5, content: 'divide'},
    {id: 6, content: 'Direct input'}
]

const Coin = [
    {id: 1, content: 'Ethereum'}
]

function BridgeMain() {
    return (
        <MainContainer>
            <MainFormContainer>
                <FormInput title="Asset">
                    <CoinButton />
                </FormInput>
                <MultiFormInput>
                    <FormInput title="From">
                        <DropDown base="Select a chain" info={Coin} />
                    </FormInput>
                    <Arrow />
                    <FormInput title="To">
                        <DropDown base="Select a chain" isDisabled={true} />
                    </FormInput>
                </MultiFormInput>
                <FormInput title="Destination">
                    <Input type="number" placeholder="Recipient Wallet should be connected. Select the Chain to receive the converted coins." isReadOnly={true}/>
                </FormInput>
                <FormInput title="Amount">
                    <Input type="number" placeholder="Amount" min={1} value="" />
                    <DropDown base={'Direct input'} info={Percent} width={27.5}/>
                </FormInput>
                <FormDescription />
                <FormButton disabled>Convert Now</FormButton>
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
    animation: ${fadeInLeft} 2s ease;
`

const MainFormContainer = styled.div`
    width: 100%;
    padding: 40px;
    background: white;
    border-radius: 8px;
`

const MultiFormInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
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
    color: white;
    :disabled {
        cursor: default;
        opacity: 0.5;
        pointer-events: none;
    }
`