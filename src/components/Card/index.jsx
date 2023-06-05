import '../../styles/card.scss'

function Card({ title, description, cover, tags, location, equipments, rating }) {

    let picturesTab = []

    return (
        <div className="card-div">
            <img className='cover' src={cover} alt="appartement" />
            <h2>{title}</h2>
            <span>{location}</span>
            <ul>
            {tags.map((tagsName) => (
                <li key={tagsName}>{ tagsName }</li>
            ))}
            </ul>
            <p>{description}</p>
            <p>{equipments}</p>  
            <span>{rating}</span>         
            <br/>
        </div>
    )
}
 
export default Card