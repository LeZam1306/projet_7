import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import '../styles/rate.scss'

const Rate = ({score}) => {
    return <div className="rating">
        {[...Array(5)].map((_, index) => {
            return <FontAwesomeIcon key={index} icon={faStar} color={index < score ? "#FF6060" : "#E3E3E3"}/>
        })}
    </div>
}

Rate.propTypes = {
    score: PropTypes.string.isRequired
} 

export default Rate