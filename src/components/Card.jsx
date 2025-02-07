import { Link } from "react-router-dom"
import "../styles/card.scss"
import PropTypes from "prop-types"

const Card = ({urlImg, title, id}) => {
    return <Link to={`/housing/${id}`} className="card">
        <img className="card__img" src={urlImg} alt={title}/>
        <h3 className="card__title">{title}</h3>
    </Link>
}

Card.propTypes = {
    urlImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default Card