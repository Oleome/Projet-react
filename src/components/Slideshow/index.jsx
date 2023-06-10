import '../../styles/slideshow.scss'
import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'



function SlideShow ({pictures, counter, tableauImage}) {

tableauImage = []

    return (
        
            <div className='slideshow' >
                <span className='slideshow__count'>1/${tableauImage.length}</span>
                <button className='slideshow__right-arrow'>
                    <img src={arrow_right} alt="flèche allant à droite" />
                </button>
                <button className='slideshow__left-arrow'>
                    <img src={arrow_left} alt="flèche allant à gauche" />
                </button>
                <img className='slideshow__picture' src={pictures} alt="" />                
            </div>
        
    )
}

export default SlideShow







