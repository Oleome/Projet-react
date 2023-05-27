function Card({ title, description, cover, tags }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{title}</span>
            <p>{description}</p>
            <img src={cover} alt="appartement" width={250} height={150} />
            <span>{tags}</span>
            <br/>
        </div>
    )
}
 
export default Card