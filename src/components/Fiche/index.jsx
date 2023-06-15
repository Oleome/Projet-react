import '../../styles/fiche.scss'
import Collapse from '../Collapse'
import etoile_pleine from '../../assets/etoile_pleine.png'
import etoile_transparente from '../../assets/etoile_transparente.png'


function Fiche({ title, description, tags, location, equipments, rating, host }) {

    function ratingStars() {
        const stars = [];
        for (let i = 0; i < rating; i++) {
          stars.push(<img key={i} src={etoile_pleine} alt="étoile pleine" />);
        }
        for (let i = rating; i < 5; i++) {
          stars.push(<img key={i} src={etoile_transparente} alt="étoile transparente" />);
        }
        return stars;
      };

    return (
        <>
            <div className="fiche">
                <div className='title__rating'>
                    <h2 className='fiche__title'>{title}</h2>
                    <span>{location}</span>
                    <ul className='tags__liste'>
                        {tags.map((tagsName) => (
                            <li className='tags__liste--li' key={tagsName}>{ tagsName }</li>
                        ))}
                    </ul>
                </div>
                <div className='tag__host'>
                    <div className='host__container'>
                        <span className='host__name'>{host.name}</span>
                        <img className='host__picture' src={host.picture} alt="portrait de l'hôte" />
                    </div>
                    <span className='rating'>{ratingStars()}</span>         
                </div>
                        
            </div>
            <div className='collapse__globaldiv'>
                <div className='collapse__container--fiche'>
                    <Collapse title='Description'>
                        <p className='collapse__description'>{description}</p>
                    </Collapse>
                </div>
                <div className='collapse__container--fiche'>
                    <Collapse title='Équipements'>
                        <ul className='collapse__equipment'>{equipments.map((equipment) => (
                            <li key={equipment}>{ equipment }</li>
                        ))}</ul>
                    </Collapse>
                </div>
            </div>  
        </>

    )
}
 
export default Fiche