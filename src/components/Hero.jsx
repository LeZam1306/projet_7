const Hero = ({urlImg, title}) => {
    return <div className="hero">
        <img className="hero__img" src={urlImg} />
        {title && <h2 className="hero__title">{title}</h2>}
    </div>
}
export default Hero