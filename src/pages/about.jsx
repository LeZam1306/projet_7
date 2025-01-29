import Hero from "../components/Hero.jsx"
import DropDown from "../components/DropDown.jsx"
import heroImg from "../assets/hero-about.png"
import { aboutSectionRequest } from "../services/api.js"
import { useEffect, useState } from "react"
import "../styles/aboutSection.scss"

const About = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setData(await aboutSectionRequest())
        }
        fetchData()
    },[])
    while (data.length === 0){
        return <div>Loading...</div>
    }
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