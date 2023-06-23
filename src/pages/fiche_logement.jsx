import jsonData from '../data/backend.json'
import Fiche from '../components/Fiche/index'
import SlideShow from '../components/Slideshow/index'

import { Navigate, useParams } from 'react-router-dom'

function FicheLogement() {

    
    const { key } = useParams();
    const appartement = jsonData.find((appart) => appart.id === key);
    console.log(appartement)
    if(appartement === undefined) {
        return <Navigate to='/error/' />
    }
      
    return (
                
        <div className='global-div' key={appartement.id}>
            <SlideShow pictures={appartement.pictures} />
            <Fiche
                host={appartement.host}
                description={appartement.description}
                title={appartement.title}
                tags={appartement.tags}
                equipments={appartement.equipments}
                rating={appartement.rating}
                location={appartement.location}
            />
        </div>        
    )        
}

export default FicheLogement
