import '../../styles/card.scss'
import arrow_up from '../../assets/arrow_up.png'
import arrow_down from '../../assets/arrow_down.png'
import { useState } from 'react'
import Fade from '../Fade/index'

function Card({ title, description, cover, tags, location, equipments, rating }) {

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
            
            {isOpen ? (
                <div className="card__description">
                    <div className='card__description--container'>
                        <button className='card__description--button' onClick={() => setIsOpen(false)}><img className='arrow-up' src={arrow_up} alt="une flèche vers le haut" /></button>
                    </div>
                        <p className='open'>{description}</p>
                </div>
            ) : (
                <div className='card__description--container'>
                    <button onClick={() => setIsOpen(true)}><img className='arrow-down' src={arrow_down} alt="une flèche vers le bas" /></button>
                </div>
            )}
            
            
            
            <span>{equipments}</span>  
            <span>{rating}</span>         
            <br/>
        </div>
    )
}
 
export default Card