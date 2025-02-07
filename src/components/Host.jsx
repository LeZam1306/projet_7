import PropTypes from "prop-types"
import "../styles/host.scss"

const Host = ({imgProfile, name}) => {
    return <aside className="host">
        <p>{name}</p>
        <img src={imgProfile} />
    </aside>
}

Host.propTypes = {
    imgProfile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Host