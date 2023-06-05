import jsonData from '../data/backend.json'
import Card from '../components/Card'

function FicheLogement() {
    return (
        jsonData.map((item) => (
          <Card
              key={item.id}
              description={item.description}
              cover={item.cover}
              title={item.title}
              tags={item.tags}
              equipments={item.equipments}
              rating={item.rating}
              location={item.location}
          />
        ))
    )
}

export default FicheLogement