import arrow_up from '../../assets/arrow_up.png'
import arrow_down from '../../assets/arrow_down.png'
import '../../styles/fiche.scss'
import { useState } from 'react'

function Collapse({children}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fiche__collapse">
            <div className='fiche__collapse--container'>
                <button className='fiche__collapse--button' onClick={() => setIsOpen(!isOpen)}>
                    <img className={`arrow ${isOpen ? 'arrow-down' : 'arrow-up'}`} src={isOpen ? arrow_down : arrow_up} alt="flèche" />
                </button>
            </div>
            <p className={`collapse ${isOpen ? 'collapse-open' : 'collapse-close'}`}>{children}</p>
        </div>
    )
}

export default Collapse