import arrow_up from '../../assets/arrow_up.png'
import arrow_down from '../../assets/arrow_down.png'
import '../../styles/collapse.scss'
import { useState } from 'react'

function Collapse({children, title}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={'collapse__container'}>
            <div className='collapse__header' onClick={() => setIsOpen(!isOpen)}>
                <span className='collapse__title'>{title}</span>
                <button className='collapse__button'>
                    <img className={`arrow ${isOpen ? 'arrow-down' : 'arrow-up'}`} src={isOpen ? arrow_down : arrow_up} alt="flèche" />
                </button>
            </div>
            <div className={`collapse ${isOpen ? 'collapse-open' : 'collapse-close'}`}>{children}</div>
        </div>
    )
}

export default Collapse
