import {NavLink} from "react-router-dom"
import logo from "../assets/logo-color.png"
import "../styles/navBar.scss"
const NavBar = () => {
    return <header className="navBar">
        <div className="navBar__logo">
            <img src={logo} alt="logo"/>
        </div>
        <nav className="navBar__nav">
            <NavLink className={({isActive}) => 
                isActive ? "navBar__link navBar__link--active" : "navBar__link"
            } to="/">Accueil</NavLink>
            <NavLink className={({isActive}) => 
                isActive ? "navBar__link navBar__link--active" : "navBar__link"
            } to="/A-propos">A propos</NavLink>
        </nav>
    </header>
}
export default NavBar