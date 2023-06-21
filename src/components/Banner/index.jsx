import './banner.scss'

function Banner({picture, title}) {
    return (
      <div className='banner'> 
        <img className='banner__picture' src={picture} alt="bannière" />
        <span className='banner__title'>{title}</span>
      </div>
    )
}

export default Banner