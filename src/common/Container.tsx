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
    margin: 0 auto;
    width: 1180px;
    padding: 100px 50px 40px;
`