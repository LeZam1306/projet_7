import PropTypes from "prop-types"

const Hero = ({urlImg, title, lowBrightness}) => {
    return <div className="hero">
        <img className={lowBrightness ? "hero__img hero__img--filter" : "hero__img"} src={urlImg} />
        {title && <h2 className="hero__title">{title}</h2>}
    </div>
}
export default Hero

Hero.propTypes = {
    urlImg: PropTypes.string.isRequired,
    title: PropTypes.string,
    lowBrightness: PropTypes.bool
}
Hero.defaultProps = {
    title: "",
    lowBrightness: false
}