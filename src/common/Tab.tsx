import styled from 'styled-components'

function Tab () {
    return (
        <TabContainer>
            If you want to convert more than 20,000 KOK, please contact us through the <a href="https://help.kstadium.io/hc/en-us" target="_blank" rel="noreferrer">K STADIUM Help Center <img src="/assets/i-window.svg" alt="go to help center"/></a> before proceeding with the conversion.
        </TabContainer>
    )
}

export default Tab

const TabContainer = styled.div`
    background-color: #f5f5f5;
    z-index: 1000;
    height: 50px;
    line-height: 50px;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    position: fixed;
    width: 100%;
    a {
        color: #0d7fe9;
        text-decoration-line: none;
        :hover {
            text-decoration-line: underline; 
        }
        img {
            margin-bottom: -4px;
        }
    }
`