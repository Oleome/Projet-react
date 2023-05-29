import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLinked = styled(Link)`
    padding-right: 15px;
`
 
function Header() {
    return (
        <nav>
            <StyledLinked to="/">Accueil</StyledLinked>
            <StyledLinked to="/A-propos">A-propos</StyledLinked>
            <StyledLinked to="/Footer">Footer</StyledLinked>
            <StyledLinked to="/Fiche_Logement">Fiche Logement</StyledLinked>
        </nav>
    )
}

export default Header