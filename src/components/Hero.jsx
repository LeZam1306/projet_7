const Hero = ({urlImg, title, lowBrightness}) => {
    return <div className="hero">
        <img className={lowBrightness ? "hero__img hero__img--filter" : "hero__img"} src={urlImg} />
        {title && <h2 className="hero__title">{title}</h2>}
    </div>
}
export default Hero