import errorpic from '../assets/errorpic.png'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
`

const StyledImg = styled.img`
    width:40%;
    height:auto;
    margin: 139px 0;
`

const StyledLink = styled.a`
    margin: 139px 0;
`

function Error() {
    return (
        <StyledDiv>
            <StyledImg src={errorpic} alt="erreur 404" />
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <StyledLink href="/">Retourner sur la page d’accueil</StyledLink>
        </StyledDiv>
    )
}
 
export default Error