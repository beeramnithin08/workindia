import "./index.css"

const EachCast = (props) =>{
    const {details} = props;
    const {character,originalName,posterImage} = details

    return(
        <li className="each-cast-item">
            <img className="poster-image-cast" alt="" src={`https://image.tmdb.org/t/p/w500${posterImage}`} />
            <p>{originalName}</p>
            <p>Character : {character}</p>
        </li>
    )
}

export default EachCast