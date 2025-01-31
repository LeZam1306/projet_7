import "../styles/slider.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Slider = ({pictures}) => {

    const [count, setCount] = useState(0)

    const handleClick = (direction) => {
        let index = count
        direction ? index++ : index--

        if (index >= pictures.length){
            index = 0
        }else if (index < 0){
            index = pictures.length - 1
        }
        setCount(index)
    }

    return <section className="slider">
        <img src={pictures[count]} className="slider__img"/>
        <p className="slider__count">{count + 1}/{pictures.length}</p>
        <FontAwesomeIcon onClick={() => handleClick(false)} icon={faChevronLeft} className="slider__leftArrow"/>
        <FontAwesomeIcon onClick={() => handleClick(true)} icon={faChevronRight} className="slider__rightArrow"/>
    </section>
}
export default Slider