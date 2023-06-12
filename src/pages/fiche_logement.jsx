import jsonData from '../data/backend.json'
import Fiche from '../components/Fiche/index'
import SlideShow from '../components/Slideshow/index'

import { useParams } from 'react-router-dom'

function FicheLogement() {

    
    const { key } = useParams();
    const appartements = jsonData.filter((appart) => appart.id === key);
      
    return (
        
        appartements.map((appart) => (
            <div key={appart.id}>
                <SlideShow pictures={appart.pictures} />
                <Fiche
                    host={appart.host}
                    description={appart.description}
                    title={appart.title}
                    tags={appart.tags}
                    equipments={appart.equipments}
                    rating={appart.rating}
                    location={appart.location}
                />
            </div>
        ))        
    );
}

export default FicheLogement
