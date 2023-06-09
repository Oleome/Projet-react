import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import '../components/Collapse/collapse.scss'
import '../styles/a-propos.scss'
import fond_a_propos from '../assets/fond_a_propos.png'

function APropos() {


    return (
        <main className='a-propos'>
            <Banner
                picture={fond_a_propos}
            />
            <section className='a-propos__section'>
                <Collapse title="Fiabilité">                
                    <p className='collapse__content'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes nos information sont régulièrement vérifiées par nos équipes</p>
                </Collapse>
                <Collapse title="Respect">
                    <p className='collapse__content'>La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse title="Service"> 
                    <p className='collapse__content'>La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse title="Sécurité">
                    <p className='collapse__content'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que nos standard sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>    
            </section>                   
        </main>
    )}

export default APropos