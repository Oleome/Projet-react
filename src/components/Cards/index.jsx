function Card({ title, description, cover, tags }) {
    return (
        <div>
            <span>{title}</span>
            <p>{description}</p>
            <img src={cover} alt="appartement" />
            <span>{tags}</span>
            <br/>
        </div>
    )
}
 
export default Card