import '../../styles/fiche.scss'
import Collapse from '../Collapse'
import etoile_pleine from '../../assets/etoile_pleine.png'
import etoile_transparente from '../../assets/etoile_transparente.png'


function Fiche({ title, description, tags, location, equipments, rating }) {

    const renderRatingStars = () => {
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
        <div className="fiche">
            
            <h2>{title}</h2>
            <span>{location}</span>
            <div className='tag__rating'>
                <ul className='tags__liste'>
                    {tags.map((tagsName) => (
                        <li className='tags__liste--li' key={tagsName}>{ tagsName }</li>
                    ))}
                </ul>
                <span className='rating'>{renderRatingStars()}</span>         
            </div>
            <div className='collapse__globaldiv'>
                <Collapse>
                    <p className='collapse__description'>{description}</p>
                </Collapse>
                <Collapse>
                    <ul className='collapse__equipment'>{equipments.map((equipment) => (
                        <li key={equipment}>{ equipment }</li>
                    ))}</ul>
                </Collapse>
            </div>
            
            
            <span>{equipments}</span>  
            <br/>
        </div>
    )
}
 
export default Fiche