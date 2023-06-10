import jsonData from '../../data/backend.json'
import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'



function SlideSwow ({children, counter, tableauImage}) {

tableauImage = []

    return (
        <div className=''>
            <div className='' >
                <span className=''>1/${tableauImage.length}</span>
                <button className='' onClick={() => }>
                    <img src={arrow_right} alt="flèche allant à droite" />
                </button>
                <button className='' onClick={() => }>
                    <img src={arrow_left} alt="flèche allant à gauche" />
                </button>
            </div>
        </div>
    )
}

export default SlideSwow