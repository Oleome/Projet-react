import styled from 'styled-components'
import logfoot from '../../assets/logfoot.png'

const StyledFooter = styled.footer`
    background-color: black;
`


function Footer() {
    return (
        <StyledFooter>
            <img src={logfoot} alt="logo de kasa" />
        </StyledFooter>
    )
}

export default Footer