import Hero from "../../components/Hero.jsx"
import CardSection from "../../components/CardSection.jsx"
import imgHero from "../../assets/hero-home.png"
import "../../styles/hero.scss"
import { housingRequest } from "../../services/api.js"
import { useEffect, useState } from "react"

const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setData(await housingRequest());
            }catch (err) {
                setError("Chargement impossible")
            }finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [])
    
    const cardsData = Array.isArray(data) ? data.map(cardData => {
        return {
            id: cardData.id,
            cover : cardData.cover,
            title : cardData.title
        }
    }) : []

    if (loading) return <div>Chargement...</div>
    if (error) return <p>{error}</p>

    return <>
        <Hero urlImg={imgHero} title="Chez vous, partout et ailleurs" lowBrightness={true}/>
        <CardSection cardsInfos={cardsData} />
    </>
}
export default Home