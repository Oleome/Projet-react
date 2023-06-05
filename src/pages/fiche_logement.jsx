import jsonData from '../data/backend.json'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'

function FicheLogement(props) {
    const { key } = useParams();
    return (
        <> 
          
        <Card
              key={props.id}
              description={props.description}
              cover={props.cover}
              title={props.title}
              tags={props.tags}
              equipments={props.equipments}
              rating={props.rating}
              location={props.location}
        />
        </>
        
    )
}

export default FicheLogement