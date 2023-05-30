import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const StyledLinked = styled(Link)`
    font-size: 24px;
    text-decoration: none;
    padding-left: 40px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    @media screen and (max-width: 960px) {
        font-size: 18px;
    }
    @media screen and (max-width: 650px) {
        font-size: 12px;
    }
`

const KasaLogo = styled.img`
    width: 16%;
    height: auto;
`

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 5%;
    background-color: #E5E5E5;
`

const StyledNav = styled.nav`
    white-space: nowrap;
`


function Header() {
    return (
        <StyledHeader>
            <KasaLogo src={logo} alt="logo de kasa" />
            <StyledNav>
                <StyledLinked to="/">Accueil</StyledLinked>
                <StyledLinked to="/A-propos">A-propos</StyledLinked>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header