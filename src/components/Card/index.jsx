import '../../styles/card.scss'

function Card({ title, description, cover, tags, location, equipments, rating }) {
    return (
        <div className="card-div">
            <img src={cover} alt="appartement" />
            <h2>{title}</h2>
            <span>{location}</span>
            <span>{tags}</span>
            <p>{description}</p>
            <p>{equipments}</p>  
            <span>{rating}</span>          
            <br/>
        </div>
    )
}
 
export default Card