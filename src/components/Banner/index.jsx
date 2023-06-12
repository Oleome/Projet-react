import '../../styles/banner.scss'

function Banner({children, title}) {
    return (
      <div className='container1'> 
        <span>{title}</span>
        <img src={children} alt="bannière" />
      </div>
    )
}

export default Banner