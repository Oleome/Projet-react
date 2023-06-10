import jsonData from '../../data/backend.json'
import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'



function SlideShow ({pictures, counter, tableauImage}) {

tableauImage = []

    return (
        <div className=''>
            <div className='' >
                <img src={pictures} alt="" />
                <span className=''>1/${tableauImage.length}</span>
                <button className=''>
                    <img src={arrow_right} alt="flèche allant à droite" />
                </button>
                <button className=''>
                    <img src={arrow_left} alt="flèche allant à gauche" />
                </button>
            </div>
        </div>
    )
}

export default SlideShow