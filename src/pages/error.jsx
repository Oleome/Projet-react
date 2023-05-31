import errorpic from '../assets/errorpic.png'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    min-width: 300px;
`

const StyledImg = styled.img`
    width:40%;
    height:auto;
    margin: 139px 0;
`

const StyledSpan = styled.span`
    text-align: center;
    margin: 0 184px;
    font-size: 36px;
    @media screen and (max-width: 960px) {
        font-size: 28px;
        margin: 0 114px;
    }
    @media screen and (max-width: 650px) {
        font-size: 18px;
        margin: 0 57.5px;
    }
`

const StyledLink = styled.a`
    margin: 139px 0;
    font-size: 18px;
    @media screen and (max-width: 960px) {
        font-size: 16px;
    }
    @media screen and (max-width: 650px) {
        font-size: 14px;
    }
`

function Error() {
    return (
        <StyledDiv>
            <StyledImg src={errorpic} alt="erreur 404" />
            <StyledSpan>Oups! La page que vous demandez n'existe pas.</StyledSpan>
            <StyledLink href="/">Retourner sur la page d’accueil</StyledLink>
        </StyledDiv>
    )
}
 
export default Error