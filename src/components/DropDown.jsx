import "../styles/dropDown.scss"

const DropDown = ({title, children}) => {
    return <details className="drop-down">
        <summary>{title}</summary>
        <div>
            <p>{children}</p>
        </div>
    </details>
}
export default DropDown