import jsonData from '../data/backend.json'
import Fiche from '../components/Fiche-logement/index'
import { useParams } from 'react-router-dom'

function FicheLogement() {

    let { key } = useParams();
    
    return (
        jsonData.map((appart) => appart.id === key ?
        <Fiche 
              key={appart.id}
              description={appart.description}
              cover={appart.cover}
              title={appart.title}
              tags={appart.tags}
              equipments={appart.equipments}
              rating={appart.rating}
              location={appart.location}
        />
        : null
       
        )
    )
}

export default FicheLogement