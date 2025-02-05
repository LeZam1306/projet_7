import { Link } from 'react-router-dom'
import "../styles/noFound.scss"

const NotFound = () => {
    return <section className="no-found">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
}
export default NotFound