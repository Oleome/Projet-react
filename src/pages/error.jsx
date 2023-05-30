import errorpic from '../assets/errorpic.png'
import styled from 'styled-components'

const StyledImg = styled.img`
    width:40%;
    height:auto;
`

function Error() {
    return (
        <div>
            <StyledImg src={errorpic} alt="erreur 404" />
            <h1>Oups 🙈 Cette page n'existe pas</h1>
        </div>
    )
}
 
export default Error