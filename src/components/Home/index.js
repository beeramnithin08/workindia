import React from 'react';
import {Link} from 'react-router-dom'
import Card from "../Card"
import "./index.css"

class Home extends React.Component{
    state={moviesList:[]}

    componentDidMount(){
        this.getMoviesList()
    }

    getMoviesList=async()=>{
        const url="https://api.themoviedb.org/3/movie/popular?api_key=6e0006a4d204abc45b027d2063368d75"
        const response = await fetch(url)
        //console.log(response)
        const data = await response.json()
        //console.log(data)

        const updatedData = data.results.map(each=>({
            id:each.id,
            imageUrl:each.backdrop_path,
            rating:each.vote_average,
            title:each.title,
            originalTitle:each.original_title,
            posterImageUrl:each.poster_path

        }))

        //console.log(updatedData)

        this.setState({moviesList:updatedData})
    }

    render(){
        const {moviesList} = this.state

        return(
            <div>
                <h1 className='top-heading'>Popular</h1>
                <ul className='moviesList-container'>
                    {moviesList.map(each=>
                        <Link to={`/${each.id}`}><Card details={each} key={each.id} /></Link>
                    )}
                </ul>
            </div>
        )
    }
}

export default Home