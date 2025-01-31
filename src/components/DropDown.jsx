import "../styles/dropDown.scss"

const DropDown = ({title, children}) => {
    return <details className="drop-down">
        <summary>{title}</summary>
        <article>
            {children}
        </article>
    </details>
}
export default DropDown