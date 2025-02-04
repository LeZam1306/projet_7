import "../styles/host.scss"

const Host = ({imgProfile, name}) => {
    return <aside className="host">
        <p>{name}</p>
        <img src={imgProfile} />
    </aside>
}

export default Host