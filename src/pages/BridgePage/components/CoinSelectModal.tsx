import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../../../common/Modal'

type PropTypes = {
    coin: string;
    setCoin:  React.Dispatch<React.SetStateAction<string>>;
    handleToggle: () => void;
}

const CoinInfo = [
    {id: 1, coin: 'KOK', img: '/assets/kok.png'}
]

function CoinSelectModal({coin, setCoin, handleToggle}: PropTypes) {
    const [click, setClick] = useState<boolean>(coin !== '')
    const [value, setValue] = useState<string>(coin)

    const handleCoinClick = (value: string) =>  {
        if(click === false) {
            setClick(true)
            setValue(value)
        }
        else if(click === true && value !== '') {
            setClick(false)
            setValue('')
        }
    }

    const handleOkClick = () =>  {
        setCoin(value);
        handleToggle();
    }

    useEffect(() => {
        return () => {
            if(value === '') setCoin('')
        }
    }, [setCoin, value])

    return (
        <Modal width={400} title={'Select a coin'} subTitle={'Select a coin to convert.'} handleToggle={handleToggle} handleOkClick={handleOkClick} isDisabled={value === ''}>
            <CoinSelectWrapper>
                {CoinInfo.map(item => (
                        <CoinCard key={item.id} onClick={() => handleCoinClick(item.coin)} isSelected={value === item.coin}>
                            <img src={item.img} alt={item.coin} width={40}/><strong>{item.coin}</strong>
                        </CoinCard>
                    ))}
            </CoinSelectWrapper>
        </Modal>
    )
}

export default CoinSelectModal

const CoinSelectWrapper = styled.div`
    display: flex;
    width: 100%;
`

const CoinCard = styled.div<{isSelected: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: ${({isSelected, theme}) => isSelected ? `${theme.color.COLOR_LIGHT_GREEN}` : 'white' };
    cursor: pointer;
    width: 84px;
    height: 86px;
    img {
        margin: 10px;
    }
    strong {
        font-size: 12px;
        margin-bottom: 10px;
    }
    :hover {
        background: ${({theme}) => theme.color.COLOR_LIGHT_GREEN};
    }
    :active {
        background: ${({theme}) => theme.color.COLOR_GREEN_THREE};
    }
`