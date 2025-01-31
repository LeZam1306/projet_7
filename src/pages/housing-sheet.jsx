import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { housingRequest } from "../services/api.js"
import Slider from "../components/Slider.jsx"
import DropDown from "../components/DropDown.jsx"
import Host from "../components/Host.jsx"
import Rate from "../components/Rate.jsx"
import "../styles/HousingSheet.scss"

function HousingSheet(){

    const { id } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let allData = await housingRequest()
            let foundItem = allData.find(item => item.id == id)
            setData(foundItem)
        }
        fetchData()
    },[id])
    while (data.length == 0){
        return <div>Loading...</div>
    }
    return <>
        <Slider pictures={data.pictures} />

        <div className="presentation">
            <section className="presentation__house">
                <h1 className="title">{data.title}</h1>
                <h2 className="location">{data.location}</h2>
                <ul>
                    {data.tags.map((item, index) => <li key={index} className="tag">{item}</li>)}
                </ul>
            </section>

            <section className="presentation__host">
                <Host imgProfile={data.host.picture} name={data.host.name}/>
                <Rate score={data.rating} />
            </section>
        </div>

        <section className="presentation-feature">
            <DropDown title="Description">{data.description}</DropDown>
            <DropDown title="Équipements">
                <ul>
                    {data.equipments.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </DropDown>
        </section>
    </>
}
export default HousingSheet