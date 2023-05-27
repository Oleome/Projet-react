function Card({ title, description, cover }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{title}</span>
            <p>{description}</p>
            <img src={cover} alt="appartement" width={250} height={150} />
            <br/>
        </div>
    )
}
 
export default Card