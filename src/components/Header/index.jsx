import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const StyledLinked = styled(Link)`
    padding-right: 15px;
`
 
function Header() {
    return (
        <div>
            <img src={logo} alt="logo de kasa" />
            <nav>
                <StyledLinked to="/">Accueil</StyledLinked>
                <StyledLinked to="/A-propos">A-propos</StyledLinked>
            </nav>
        </div>
    )
}

export default Header