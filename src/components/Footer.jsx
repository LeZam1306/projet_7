import logo from "../assets/logo-white.png"
import "../styles/footer.scss"

const Footer = () => {
    return <footer className="footer">
        <div className="footer__content">
            <img src={logo} alt="logo kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
}
export default Footer