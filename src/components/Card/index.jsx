import jsonData from '../../data/backend.json'
import { Link } from 'react-router-dom'
import '../../styles/home.scss'

function Card() {
    return (
        <div>
            {jsonData.map((item) => (
                <Link to={`/fiche_logement/${item.id}`} key={item.id} className='container2__card'>
                <img src={item.cover} alt="cover" />
                <div className='container2__title'>
                    <span>{item.title}</span>
                </div>
                </Link>
            ))}
        </div>
    )
} 

export default Card