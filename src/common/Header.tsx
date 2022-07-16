import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

function Header () {
    const location = useLocation()
    const [path, setPath] = useState(location.pathname)
    
    useEffect(() => {
        if(location.pathname === '/bridge') {
            setPath('/bridge')
        } else {
            setPath('/history')
        }
    }, [location.pathname])

    return (
        <HaederContainer>
            <NavSection>
                <Link to="/"><img src="/assets/kstadium-beta-logo.4be04553.svg" alt="kstadium logo" width={225} height={44}/></Link>
                <NavLink select={(path === '/bridge').toString()} to="/bridge">Bridge</NavLink>
                <NavLink select={(path === '/history').toString()} to="/history">History</NavLink>
            </NavSection>
            <ButtonSection>
                <ImageButton disabled>Connect Wallet</ImageButton>
            </ButtonSection>
        </HaederContainer>
    )
}

export default Header

const HaederContainer = styled.header`
    position: fixed;
    padding: 20px 28px;
    display: flex;
    justify-content: space-between;
    height: 90px;
    width: 100%;
`

const NavSection = styled.section`
    display: flex;
    align-items: center;
    img {
        margin-right: 40px;
    }
`

const NavLink = styled(Link)<{select: string}>`
    text-decoration: none;
    position: relative;
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin: 0 18px;
    padding: 7px 0;
    ::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 35px;
        line-height: 35px;
        content: attr(title);
        border-bottom: 2px solid white;
        max-width: ${(props) => props.select === 'true' ? '100%' : 0};
        overflow: hidden;
        transition: all 0.2s;
    }
    :hover::after {
        max-width: 100%;
    }
`

const ButtonSection = styled.section`
    display: flex;
    justify-content: right;
`

const ImageButton = styled.button`
    border: none;
    border-radius: 4px;
    background: ${({theme}) => theme.color.COLOR_DARK_GREEN} url('/assets/i-connect.6803b5a2.svg') no-repeat 10% 50%;
    color: white;
    width: 180px;
    height: 50px;
    font-size: 14px;
    font-weight: normal;
    padding-left: 30px;
    margin: 0px;
    :disabled {
        cursor: default;
        opacity: 0.5;
        pointer-events: none;
    }
`