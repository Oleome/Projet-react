import '../styles/home.scss'
import jsonData from '../data/backend.json'
import Banner from '../components/Banner'
import fond_mer from '../assets/fond_mer.png'
import Card from '../components/Card/index'



function App() {


  return (
    <main>
      <Banner>
        {fond_mer}
      </Banner>
      <section className='container2'>
        {jsonData.map((item) => (
          <Card 
            id={item.id}
            title={item.title}
            cover={item.cover}
          />
        ))}
      </section>
    </main>
  )}

export default App;


