function Card({ title, description }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{title}</span>
            <p>{description}</p>
        </div>
    )
}
 
export default Card