import Hero from "../../components/Hero.jsx"
import CardSection from "../../components/CardSection.jsx"
import imgHero from "../../assets/hero-home.png"
import "../../styles/hero.scss"
import { housingRequest } from "../../services/api.js"
import { useEffect, useState } from "react"

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
            try{
                const fetchData = async () => {
                    setData(await housingRequest())
                }
                fetchData()
            }catch(error){
                console.log("erreur")
            }
    }, [])
    while (data.length === 0) {
        return <div>Loading...</div>;
    }
    const cardsData = data.map(cardData => {
        return {
            id: cardData.id,
            cover : cardData.cover,
            title : cardData.title
        }
    })
    return <>
        <Hero urlImg={imgHero} title="Chez vous, partout et ailleurs" lowBrightness={true}/>
        <CardSection cardsInfos={cardsData} />
    </>
}
export default Home