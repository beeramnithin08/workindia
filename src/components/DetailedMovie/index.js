import React from 'react'
import "./index.css"

import EachCast from "../EachCast"

class DetailedMovie extends React.Component{

    state={movieDetails:{},castList:[]}

    componentDidMount(){
        this.getMovieDetailsAndCast()
        
    }

    getMovieDetailsAndCast=async()=>{
        
        const {match} = this.props
        const {params} = match
        const {id} = params

        const movieUrl=`https://api.themoviedb.org/3/movie/${id}?api_key=6e0006a4d204abc45b027d2063368d75&language=en-US`
        const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6e0006a4d204abc45b027d2063368d75&language=en-US`
        
        const response = await fetch(movieUrl)
        //console.log(response)
        const data = await response.json()
        //console.log(data.adult)

        const updatedData = {
            posterImg:data.poster_path,
            originalTitle:data.original_title,
            rating:data.vote_average,
            runtime:data.runtime,
            releaseData:data.release_date,
            overview:data.overview,
            backdropImage:data.backdrop_path
        }

        const castResponse  = await fetch(castUrl)
        const castData = await castResponse.json()
        
        const actualCast = castData.cast
        //console.log(actualCast)

        const updatedCastData = actualCast.map(each=>({
           
                originalName:each.original_name,
                character:each.character,
                posterImage:each.profile_path,
                castId:each.cast_id
            
        }))

        this.setState({movieDetails:updatedData,castList:updatedCastData})
        
         
        console.log(updatedCastData)
    }

    

    render(){
        const {movieDetails,castList} = this.state
        //console.log(castList)
       
        const {posterImg,originalTitle,rating,runtime,releaseData,overview,backdropImage} = movieDetails
        const {originalName,character} = castList
        return(
            <div>
                <div className='detailed-view-container'>
                    <div className='content-container'>
                        <div className='poster-content'>
                            <img src={`https://image.tmdb.org/t/p/w500/${posterImg}`} className='poster-image' />
                            <div className='content-only-container'>
                                <h1>{originalTitle}</h1>
                                <h1>Rating : {rating}</h1>
                                <h1>{runtime}</h1>
                                <h1>Release Date : {releaseData}</h1>
                            </div>
                        </div>
                        <div className='overview'>
                            <h1>Overview</h1>
                            <p>{overview}</p>
                        </div>
                    </div>
                    <div className='backdropImage-container'>
                        <img src={`https://image.tmdb.org/t/p/w500/${backdropImage}`} className='backdrop-image' />
                    </div>
                </div>
                <div className='cast-container'>
                    <h1>CAST</h1>
                    <ul className='each-cast-unordered-list'>
                        {castList.map(each=>(
                            <EachCast details={each} key={each.castId} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DetailedMovie