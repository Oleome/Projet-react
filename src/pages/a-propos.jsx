import '../styles/a-propos.scss'
import arrow_up from '../assets/arrow_up.png'
import arrow_down from '../assets/arrow_up.png'
import { useState } from 'react'

function APropos() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="a-propos-div">
            <img onClick={() => setIsOpen(false)} src={arrow_up} alt="une flèche vers le haut" />
        </div>
    ) : (
        <img onClick={() => setIsOpen(true)} src={arrow_down} alt="une flèche vers le bas" />
    )
}

export default APropos