import "../styles/dropDown.scss"
import PropTypes from "prop-types"

const DropDown = ({title, children}) => {
    return <details className="drop-down">
        <summary>{title}</summary>
        <article>
            {children}
        </article>
    </details>
}
export default DropDown

DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired
}