import { PropsWithChildren } from 'react'
import styled from 'styled-components'

function Contianer({children} : PropsWithChildren) {
    return (
        <Component>
            {children}
        </Component>
    )
}

export default Contianer

const Component = styled.section`
    margin: auto;
    width: 1180px;
    height: 100vh;
    padding: 100px 50px 40px;
`