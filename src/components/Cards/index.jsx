import styled from 'styled-components'

const StyledTitle = styled.span`
    
`

function Card({ title, description, cover, tags }) {
    return (
        <div>
            <span>{title}</span>
            <p>{description}</p>
            <img src={cover} alt="appartement" width={250} height={150} />
            <span>{tags}</span>
            <br/>
        </div>
    )
}
 
export default Card