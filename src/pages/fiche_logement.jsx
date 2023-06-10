import jsonData from '../data/backend.json'
import Fiche from '../components/Fiche-logement/index'
import { useParams } from 'react-router-dom'

function FicheLogement() {

    let { key } = useParams();
    const tableauImages = jsonData[0].pictures.map((picture, index) => ({
        id: index + 1,
        url: picture
    }));
    console.log(tableauImages)
    
    return (
        jsonData.map((appart) => appart.id === key ?
        <Fiche 
              key={appart.id}
              description={appart.description}
              pictures={appart.pictures[0]}
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