import { Link } from 'react-router-dom'
import '../../styles/home.scss'

function Card({id, cover, title}) {
    return (
            
        <Link to={`/fiche_logement/${id}`} key={id} className='container2__card'>
            <img src={cover} alt="cover" />
            <div className='container2__title'>
                <span>{title}</span>
            </div>
        </Link>
     
    )
} 

export default Card