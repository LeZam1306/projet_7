import Card from "./Card.jsx"
import "../styles/cardSection.scss"
import PropTypes from "prop-types"

const CardSection = ({cardsInfos}) => {
    return <section className="card-section">
        {cardsInfos.map((cardInfo) => {
           return <Card key={cardInfo.id} urlImg={cardInfo.cover} title={cardInfo.title} id={cardInfo.id}/>
        })}
    </section>
}

CardSection.propTypes = {
    cardsInfos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired
}

export default CardSection