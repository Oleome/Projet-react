import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import './header.scss'
import '../../pages/a_propos'

function Header() {
    return (
        <header>
            <img src={logo} alt="logo de kasa" />
            <nav>
                <NavLink className="nav-link" to="/">Accueil</NavLink>
                <NavLink className="nav-link" to="a_propos">A-propos</NavLink>
            </nav>
        </header>
    )
}

export default Header
