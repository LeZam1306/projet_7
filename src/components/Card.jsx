import "../styles/card.scss"

const Card = ({urlImg, title}) => {
    return <div className="card">
        <img className="card__img" src={urlImg} alt={title}/>
        <h3 className="card__title">{title}</h3>
    </div>
}
export default Card