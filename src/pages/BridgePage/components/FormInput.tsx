import { PropsWithChildren } from "react"
import styled from "styled-components"

type FormType = {
    title: string
}

function FormInput ({title, children} : PropsWithChildren<FormType>) {
    return (
        <FormInputContainer>
            <FormTitle>{title}</FormTitle>
            {children}
        </FormInputContainer>
    )
}

export default FormInput

const FormInputContainer = styled.div`
    display: flex;
    width: 100%;
    height: 58px;
    margin-bottom: 20px;
`

const FormTitle = styled.span`
    width: 119px;
    line-height: 58px;
`