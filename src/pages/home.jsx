import Card from '../components/Card/index'
import jsonData from '../data/backend.json'
import '../styles/home.scss'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function App() {
  let navigate = useNavigate();
  return (
    <main>
      <Banner />
      <section className='container2'>
        <Link to='/fiche_logement/:dataId' className='container2__title' key={jsonData[0].id}><span>{jsonData[0].title}</span></Link>
        <div onClick={() => navigate('/fiche_logement/'+jsonData[1].id)} className='container2__title' key={jsonData[1].id}><span>{jsonData[1].title}</span></div>
        <div className='container2__title' key={jsonData[2].id}><span>{jsonData[2].title}</span></div>
        <div className='container2__title' key={jsonData[3].id}><span>{jsonData[3].title}</span></div>
        <div className='container2__title' key={jsonData[4].id}><span>{jsonData[4].title}</span></div>
        <div className='container2__title' key={jsonData[5].id}><span>{jsonData[5].title}</span></div>
      </section>
    </main>
  )}

export default App;


