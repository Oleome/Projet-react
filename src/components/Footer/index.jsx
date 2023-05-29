import styled from 'styled-components'
import logfoot from '../../assets/logfoot.png'

const StyledFooter = styled.footer`
    background-color: black;
    height: 209px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledLogo = styled.img `
    width: 122px;
    height: 35px;
    margin-top: 66px;
`

const StyledSpan = styled.span`
    color: white;
    margin-top: 40px;
`



function Footer() {
    return (
        <StyledFooter>
            <StyledLogo src={logfoot} alt="logo de kasa" />
            <StyledSpan>"© 2020 Kasa. All rights reserved"</StyledSpan>
        </StyledFooter>
    )
}

export default Footer