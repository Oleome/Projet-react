import '../../styles/global.scss'
import './footer.scss'
import logfoot from '../../assets/logfoot.png'

function Footer() {
    return (
        <footer>
            <img src={logfoot} alt="logo de kasa" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer