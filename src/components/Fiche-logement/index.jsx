import '../../styles/fiche.scss'
import Collapse from '../Collapse'

function Fiche({ title, description, cover, tags, location, equipments, rating }) {

    

    return (
        <div className="fiche">
            <img className='cover' src={cover} alt="appartement" />
            <h2>{title}</h2>
            <span>{location}</span>
            <ul className='tags__liste'>
            {tags.map((tagsName) => (
                <li className='tags__liste--li' key={tagsName}>{ tagsName }</li>
            ))}
            </ul>
            <Collapse>
                <p className='collapse__description'>{description}</p>
            </Collapse>
            <Collapse>
                <ul className='collapse__equipment--liste'>{equipments.map((equipment) => (
                    <li key={equipment}>{ equipment }</li>
                ))}</ul>
            </Collapse>
            
            
            
            <span>{equipments}</span>  
            <span>{rating}</span>         
            <br/>
        </div>
    )
}
 
export default Fiche