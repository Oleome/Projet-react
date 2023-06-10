import '../../styles/fiche.scss'
import Collapse from '../Collapse'
import SlideShow from '../Slideshow/index'

function Fiche({ title, description, pictures, tags, location, equipments, rating }) {

    

    return (
        <div className="fiche">
            <SlideShow pictures={pictures} />
            
            <h2>{title}</h2>
            <span>{location}</span>
            <ul className='tags__liste'>
                {tags.map((tagsName) => (
                    <li className='tags__liste--li' key={tagsName}>{ tagsName }</li>
                ))}
            </ul>
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
            <span>{rating}</span>         
            <br/>
        </div>
    )
}
 
export default Fiche