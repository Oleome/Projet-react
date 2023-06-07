import '../../styles/fiche.scss'
import arrow_up from '../../assets/arrow_up.png'
import arrow_down from '../../assets/arrow_down.png'
import { useState } from 'react'

function Fiche({ title, description, cover, tags, location, equipments, rating }) {

    const [isOpen, setIsOpen] = useState(false)
    

    return (
        <div className="card">
            <img className='cover' src={cover} alt="appartement" />
            <h2>{title}</h2>
            <span>{location}</span>
            <ul>
            {tags.map((tagsName) => (
                <li key={tagsName}>{ tagsName }</li>
            ))}
            </ul>
            <div className="card__description">
                <div className='card__description--container'>
                    <button className='card__description--button' onClick={() => setIsOpen(!isOpen)}>
                        <img className={`arrow ${isOpen ? 'arrow-down' : 'arrow-up'}`} src={isOpen ? arrow_down : arrow_up} alt="flèche" />
                    </button>
                </div>
                <p className={`collapse ${isOpen ? 'collapse-open' : 'collapse-close'}`}>{description}</p>
            </div>
            
            
            
            <span>{equipments}</span>  
            <span>{rating}</span>         
            <br/>
        </div>
    )
}
 
export default Fiche