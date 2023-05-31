import styled from 'styled-components'

const StyledImg = styled.img`
    width: 250px;
    height: 150px;
`

function Card({ title, description, cover, tags }) {
    return (
        <div>
            <span>{title}</span>
            <p>{description}</p>
            <StyledImg src={cover} alt="appartement" />
            <span>{tags}</span>
            <br/>
        </div>
    )
}
 
export default Card