import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import '../../styles/header.scss'


function Header() {
    return (
        <header>
            <img src={logo} alt="logo de kasa" />
            <nav>
                <NavLink className="nav-link" to="/">Accueil</NavLink>
                <NavLink className="nav-link" to="/A-propos">A-propos</NavLink>
            </nav>
        </header>
    )
}

export default Header
