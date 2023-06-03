import '../../styles/card.scss'

function Card({ title, description, cover, tags }) {
    return (
        <div className="card-div">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={cover} alt="appartement" />
            <span>{tags}</span>
            <br/>
        </div>
    )
}
 
export default Card