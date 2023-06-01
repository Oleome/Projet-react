import styled from 'styled-components'
import logfoot from '../../assets/logfoot.png'

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    background-color: black;
    height: 209px;
    min-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    @media screen and (max-width: 960px) {
        font-size: 18px;
    }
    @media screen and (max-width: 650px) {
        font-size: 12px;
    }
`

const StyledLogo = styled.img `
    width: 122px;
    height: 35px;
    margin-top: 66px;
    background-color: black;
`

const StyledSpan = styled.span`
    color: white;
    margin-top: 40px;
    background-color: black;
`



function Footer() {
    return (
        <StyledFooter>
            <StyledLogo src={logfoot} alt="logo de kasa" />
            <StyledSpan>© 2020 Kasa. All rights reserved</StyledSpan>
        </StyledFooter>
    )
}

export default Footer