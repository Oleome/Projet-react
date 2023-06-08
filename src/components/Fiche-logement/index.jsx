import '../../styles/fiche.scss'
import Collapse from '../Collapse'

function Fiche({ title, description, cover, tags, location, equipments, rating }) {

    

    return (
        <div className="fiche">
            <img className='cover' src={cover} alt="appartement" />
            <h2>{title}</h2>
            <span>{location}</span>
            <ul>
            {tags.map((tagsName) => (
                <li key={tagsName}>{ tagsName }</li>
            ))}
            </ul>
            <Collapse>
                <p>{description}</p>
            </Collapse>
            
            
            
            <span>{equipments}</span>  
            <span>{rating}</span>         
            <br/>
        </div>
    )
}
 
export default Fiche