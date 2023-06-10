import '../styles/home.scss'
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
        <Card />
      </section>
    </main>
  )}

export default App;


