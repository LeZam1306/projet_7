import Card from "./Card.jsx"
import "../styles/cardSection.scss"

const CardSection = ({cardsInfos}) => {
    return <section className="card-section">
        {cardsInfos.map((cardInfo, index) => {
           return <Card key={cardInfo.id} urlImg={cardInfo.cover} title={cardInfo.title}/>
        })}
    </section>
}
export default CardSection