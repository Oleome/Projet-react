import '../../styles/banner.scss'

function Banner({children}) {
    return (
      <img className='container1' src={children} alt="bannière" />
    )
}

export default Banner