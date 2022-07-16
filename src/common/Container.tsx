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
    margin: 50px auto 0;
    width: 1180px;
    padding: 100px 50px 40px;
`