import { Link } from "react-router-dom"
import "../styles/card.scss"

const Card = ({urlImg, title, id}) => {
    return <Link to={`/housing/${id}`} className="card">
        <img className="card__img" src={urlImg} alt={title}/>
        <h3 className="card__title">{title}</h3>
    </Link>
}
export default Card