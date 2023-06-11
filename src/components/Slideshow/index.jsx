import '../../styles/slideshow.scss'
import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'
import { useState } from 'react'



function SlideShow ({pictures, index}) {

const [currentIndex, setCurrentIndex] = useState(0)

const goToNextImage = () => {
    const newIndex = (currentIndex + 1) % pictures.length; 
    setCurrentIndex(newIndex);
  };

  const goToPreviousImage = () => {
    const newIndex = (currentIndex - 1 + pictures.length) % pictures.length;
    setCurrentIndex(newIndex);
  };

    return   ( 
        <section>
            <div className='slideshow' >
                { pictures.length > 1 ? ( 
                    <>
                        <span className='slideshow__count'>{`${currentIndex + 1}/${pictures.length}`}</span> 
                        <button className='slideshow__right-arrow' onClick={goToNextImage}>
                            <img src={arrow_right} alt="flèche allant à droite" />
                        </button>
                        <button className='slideshow__left-arrow' onClick={goToPreviousImage}>
                            <img src={arrow_left} alt="flèche allant à gauche" />
                        </button>
                    </>
                ) : ( 
                null 
                )}
                <img className='slideshow__picture' key={`${pictures}-${index}`} src={pictures[currentIndex]} alt="" />                
            </div>
        </section>
    )
}

export default SlideShow







