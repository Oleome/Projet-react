import '../../styles/banner.scss'

function Banner({children, title}) {
    return (
      <div className='banner'> 
        <img className='banner__picture' src={children} alt="bannière" />
        <span className='banner__title'>{title}</span>
      </div>
    )
}

export default Banner