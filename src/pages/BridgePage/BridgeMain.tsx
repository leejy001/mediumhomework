import { SetStateAction, useEffect, useState } from "react"
import styled from "styled-components"
import useToggle from "../../hooks/useToggle"
import { fadeInLeft } from "../../style/Animation"
import DropDown from "../../common/DropDown"
import Input from "../../common/Input"
import Arrow from "./components/Arrow"
import CoinButton from "./components/CoinButton"
import FormDescription from "./components/FormDescription"
import FormInput from "./components/FormInput"
import CoinSelectModal from "./components/CoinSelectModal"
import ExchangeFromModal from "./components/ExchangeFromModal"

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

type PropType = {
    setCurrent: React.Dispatch<SetStateAction<number>>
}

function BridgeMain({setCurrent} : PropType) {
    const Destination = "Recipient Wallet should be connected. Select the Chain to receive the converted coins."

    const [coinToggle, coinToggleIsOn] = useToggle(false)
    const [coin, setCoin] = useState<string>('')
    
    const [fromToggle, fromToggleIsOn] = useToggle(false)
    const [dropDown, setDropDown] = useState<string>('')

    const handleFromToggle = () => {
        if(coin !== '') fromToggleIsOn() 
    }

    useEffect(() => {
        if(coin !== '') setCurrent(2)
        else setCurrent(1)
    }, [coin, setCurrent])
    
    return (
        <MainContainer>
            <MainFormContainer>
                <FormInput title="Asset">
                    <CoinButton coin={coin} coinToggle={coinToggle} onToggle={coinToggleIsOn} />
                </FormInput>
                <MultiFormInput>
                    <FormInput title="From">
                        <DropDown
                            id="from"
                            base="Select a chain" 
                            info={Coin} onToggle={handleFromToggle} 
                            dropDown={dropDown} 
                            setDropDown={setDropDown} 
                            isNone={coin === ''} />
                    </FormInput>
                    <Arrow />
                    <FormInput title="To">
                        <DropDown
                            id="to"
                            base="Select a chain"  
                            dropDown={dropDown} 
                            setDropDown={setDropDown} 
                            isDisabled={true} 
                            isNone={false} />
                    </FormInput>
                </MultiFormInput>
                <FormInput title="Destination">
                    <Input type="number" placeholder={Destination} isReadOnly={true}/>
                </FormInput>
                <FormInput title="Amount">
                    <Input type="number" placeholder="Amount" min={1} value={''} />
                    <DropDown 
                        id="direct"
                        base="Direct input" 
                        info={Percent} 
                        dropDown={dropDown} 
                        setDropDown={setDropDown} 
                        width={27.5} 
                        isNone={false} />
                </FormInput>
                <FormDescription />
                <FormButton disabled>Convert Now</FormButton>
            </MainFormContainer>
            {coinToggle && <CoinSelectModal handleToggle={coinToggleIsOn} coin={coin} setCoin={setCoin}/>}
            {fromToggle && <ExchangeFromModal handleToggle={fromToggleIsOn} />}
        </MainContainer>
    )
}

export default BridgeMain

const MainContainer = styled.main`
    width: 75%;
    height: auto;
    padding: 0 8px;
    background: transparent;
    animation: ${fadeInLeft} 1s ease;
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
    box-shadow: 0 1px 16px rgba(13, 127, 233, 0.4);
    background-color: ${({theme}) => theme.color.COLOR_GREEN_ONE};
    border: none;
    color: white;
    :disabled {
        cursor: default;
        opacity: 0.5;
        pointer-events: none;
    }
`