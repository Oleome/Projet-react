import jsonData from '../data/backend.json'
import '../styles/home.scss'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import fond_mer from '../assets/fond_mer.png'


function App() {


  return (
    <main>
      <Banner>
        {fond_mer}
      </Banner>
      <section className='container2'>
        {jsonData.map((item) => (
          <Link to={`/fiche_logement/${item.id}`} key={item.id} className='container2__card'>
            <img src={item.cover} alt="cover" />
            <div className='container2__title'>
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )}

export default App;


