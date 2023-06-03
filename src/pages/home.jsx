import Card from '../components/Card/index'
import jsonData from '../data/backend.json'


function App() {
  return (
    <div>
    {jsonData.map((item) => (
      <Card
          key={item.id}
          description={item.description}
          cover={item.cover}
          title={item.title}
          tags={item.tags}
      />
    ))}
  </div>
  )}

export default App;


