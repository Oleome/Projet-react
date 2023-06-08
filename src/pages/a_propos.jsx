import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import '../styles/collapse.scss'
import '../styles/home.scss'
import '../styles/fiche.scss'
import fond_a_propos from '../assets/fond_a_propos.png'

function APropos() {

    return (
        <main>
            <Banner>
                {fond_a_propos}
            </Banner>
            <Collapse title="Fiabilité">                
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes nos information sont régulièrement vérifiées par nos équipes</p>
            </Collapse>
            <Collapse>
            </Collapse>
            <Collapse>
            </Collapse>
            <Collapse>
            </Collapse>                       
        </main>
    )}

export default APropos