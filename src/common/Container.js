import styled from 'styled-components'

function Contianer({children}) {
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
`