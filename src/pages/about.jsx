import Hero from "../components/Hero.jsx"
import DropDown from "../components/DropDown.jsx"
import heroImg from "../assets/hero-about.png"
import { aboutSectionRequest } from "../services/api.js"
import { useEffect, useState } from "react"
import "../styles/aboutSection.scss"

const About = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                setData(await aboutSectionRequest())
            }catch(err){
                setError["Chargement impossible"]
                console.log(err)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if (loading) return <div>Chargement...</div>
    if (error) return <p>{error}</p>
    return <>
        <Hero urlImg={heroImg} />
        <section className="about-section">
            {data.map((item) => {
                return <DropDown key={item.id} title={item.title}>
                    {item.content}
                </DropDown>
            })}
        </section>
    </>
}
export default About