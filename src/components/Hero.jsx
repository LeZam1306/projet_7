import PropTypes from "prop-types"

const Hero = ({urlImg, title = "", lowBrightness = false}) => {
    return <div className="hero">
        <img className={lowBrightness ? "hero__img hero__img--filter" : "hero__img"} src={urlImg} />
        {title && <h2 className="hero__title">{title}</h2>}
    </div>
}
// Note: The defaultProps here is intentionally used to handle default values for props. 
// However, React will deprecate this approach in a future release for function components.
// It is recommended to use JavaScript default parameters instead, so the following will be updated eventually.
//
// For now, this is not an error, but a warning for future versions of React.
Hero.propTypes = {
    urlImg: PropTypes.string.isRequired,
    title: PropTypes.string,
    lowBrightness: PropTypes.bool
}

export default Hero