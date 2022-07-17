import React from "react"
import styled from "styled-components"

type PropTypes = {
    type: string
    min?: number
    placeholder: string
    value?: string
    isReadOnly?: boolean
}

function Input({type, min, placeholder, value, isReadOnly}: PropTypes) {
    const onChange = () => {
        // do something...
    }
    return (
        <InputContainer>
            <InputArea type={type} placeholder={placeholder} min={min} value={value} readOnly={isReadOnly} onChange={onChange}/>
        </InputContainer>
    )
}

export default Input

const InputContainer = styled.div`
    background-color: #f7f8f9;
    width: 100%;
`

const InputArea = styled.input`
    curser: text;
    padding: 12px 16px;
    ppearance: none;
    border: 1px solid #bcc3ce;
    border-radius: 2px;
    background: transparent;
    color: #3b4351;
    font-size: 14px;
    height: 58px;
    max-width: 100%;
    position: relative;
    width: 100%;
    transition: box-shadow 0.2s;
    :focus { outline: none !important; box-shadow: 0 0 1px 1px ${({theme}) => theme.color.COLOR_GREEN_TWO}; }
`