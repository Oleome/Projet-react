import '../styles/home.scss'
import jsonData from '../data/backend.json'
import Banner from '../components/Banner'
import fond_mer from '../assets/fond_mer.png'
import Card from '../components/Card/index'



function App() {


  return (
    <main>
      <Banner
        title='Chez vous, partout et ailleurs'
        picture={fond_mer}
      />
      <section className='container2'>
        {jsonData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            cover={item.cover}
          />
        ))}
      </section>
    </main>
  )}

export default App;


