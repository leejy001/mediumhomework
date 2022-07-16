import { useCallback, useRef } from "react";
import styled from "styled-components"
import { useOutsideClick } from "../hooks/useOutsideClick";

type ListType = {
    id: number
    content: string
}

type PropTypes = {
    base: string
    info?: ListType[]
    isDisabled?: boolean
    width?: number
}

function DropDown({base, info, isDisabled, width}: PropTypes) {
    const dropdownRef = useRef<HTMLUListElement>(null)
    
    const [isActive, setIsActive] = useOutsideClick(dropdownRef, false);

    const onClickBtn = useCallback((event: React.MouseEvent) => {
        event?.stopPropagation()
        setIsActive(prev => !prev);
    }, [setIsActive]);
    
    return (
        <DropDownContainer width={width}>
            <DropDownButton isActive={isActive} onClick={onClickBtn} disabled={isDisabled}><span>{base}</span><img src="/assets/i-carot.png" alt="caret icon" width={18} /></DropDownButton>
            {isActive && (
                <ul ref={dropdownRef}>
                    { info && info.map(item => {
                        if (item.content !== 'divide') return <InfoItem key={item.id} isDivide={item.content}>{item.content}</InfoItem>
                        else return <li className="divider"/>
                    })}
                </ul>
            )}
        </DropDownContainer>
    )
}

export default DropDown

const DropDownContainer = styled.div<{width?: number}>`
    width: ${({width}) => width ? `${width}%` : '100%'};
    z-index: 100;
    ul {
        margin-top: 2px;
        padding: 10px;
        text-align: left;
        background-color: white;
        border-radius: 2px;
        box-shadow: 0 0 2px rgb(13 127 233 / 40%);
        width: 100%;
        .divider {
            border-top: 1px solid ${({theme}) => theme.color.COLOR_GREEN_THREE};
        }
    }
`

const InfoItem = styled.li<{isDivide: string}>`
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    padding: 0 10px;
    margin: 5px auto;
    :hover {
        background: ${({theme}) => theme.color.COLOR_LIGHT_GREEN};
        color: ${({theme}) => theme.color.COLOR_GREEN_ONE};
    }
`

const DropDownButton = styled.button<{isActive: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({isActive, theme}) => isActive ? `${theme.color.COLOR_LIGHT_GREEN}` : 'white'};
    border-radius: 2px;
    border: 1px solid ${({theme}) => theme.color.COLOR_GREEN_THREE};
    color: ${({theme}) => theme.color.COLOR_GREEN_ONE};
    padding: 12px 16px;
    width: 100%;
    height: 100%;
    span {
        font-size: 14px;
        font-weight: 600;
    }
    :hover {
        transition: all 0.3s;
        background: ${({theme}) => theme.color.COLOR_LIGHT_GREEN};
    }
    :disabled {
        opacity: 0.5;
    }
    :active {
        color: white;
    }
    :focus { outline: none !important; box-shadow: 0 0 1px 1px ${({theme}) => theme.color.COLOR_GREEN_TWO}; }
`