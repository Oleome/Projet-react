import '../styles/card.scss'
import arrow_up from '../assets/arrow_up.png'
import arrow_down from '../assets/arrow_up.png'
import { useState } from 'react'

function APropos() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='card__description--container'>
            <button className='card__description--button' onClick={() => setIsOpen(false)}><img className='arrow-up' src={arrow_up} alt="une flèche vers le haut" /></button>
        </div>
    ) : (
        <div className='card__description--container'>
            <button onClick={() => setIsOpen(true)}><img className='arrow-down' src={arrow_down} alt="une flèche vers le bas" /></button>
        </div>
    )
}

export default APropos