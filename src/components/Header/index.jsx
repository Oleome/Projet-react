import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const StyledNavLinked = styled(NavLink)`
    text-decoration: none;
    padding-left: 40px;
    &.active {
        text-decoration: underline;
    }
`

const KasaLogo = styled.img`
    width: 16%;
    height: auto;
`

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    min-width: 300px;
    padding: 40px 100px 0;
    font-size: 24px;
    align-items: center;
    background-color: #E5E5E5;
    @media screen and (max-width: 960px) {
        font-size: 18px;
    }
    @media screen and (max-width: 650px) {
        font-size: 12px;
        padding: 20px 20px;
    }
`

const StyledNav = styled.nav`
    white-space: nowrap;
`


function Header() {
    return (
        <StyledHeader>
            <KasaLogo src={logo} alt="logo de kasa" />
            <StyledNav>
                <StyledNavLinked to="/">Accueil</StyledNavLinked>
                <StyledNavLinked to="/A-propos">A-propos</StyledNavLinked>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header