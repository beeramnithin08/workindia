import "./index.css"

const Card = (props) =>{
    const {details} = props;
    //const {id,posterImageUrl,rating,title,originalTitle,imageUrl}
    const {rating,title,posterImageUrl} = details

    return(
        <li className="each-list-item">
            <img className="display-image" alt="" src={`https://image.tmdb.org/t/p/w500${posterImageUrl}`} />
            <p>{title}</p>
            <p>Rating : {rating}</p>
        </li>
    )
}

export default Card