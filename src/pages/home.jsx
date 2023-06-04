import Card from '../components/Card/index'
import jsonData from '../data/backend.json'
import '../styles/home.scss'
import fond_mer from '../assets/fond_mer.png'


function App() {
  return (
    <main>
      <img className='container1' src={fond_mer} alt="" />
      <div className='container2'>
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
    </main>
  )}

export default App;


