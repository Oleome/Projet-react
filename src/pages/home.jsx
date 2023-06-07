import jsonData from '../data/backend.json'
import '../styles/home.scss'
import Banner from '../components/Banner'
import { useNavigate } from 'react-router-dom'


function App() {

  let navigate = useNavigate();

  return (
    <main>
      <Banner />
      <section className='container2'>
      {jsonData.map((item) => (
        <div onClick={() => navigate('/fiche_logement/'+item.id)} className='container2__title' key={item.id}>
          <span>{item.title}</span>
        </div>
      )
        
      )}
      </section>
    </main>
  )}

export default App;


