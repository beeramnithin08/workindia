import React from 'react';
import Card from "../Card"
import {Link} from 'react-router-dom'
import "./index.css"

class Home extends React.Component{
    state={topMoviesList:[]}

    componentDidMount(){
        this.getMoviesList()
    }

    getMoviesList=async()=>{
        const url="https://api.themoviedb.org/3/movie/top_rated?api_key=6e0006a4d204abc45b027d2063368d75"
        const response = await fetch(url)
        //console.log(response)
        const data = await response.json()
        // console.log(data)

        const updatedData = data.results.map(each=>({
            id:each.id,
            imageUrl:each.backdrop_path,
            rating:each.vote_average,
            title:each.title,
            originalTitle:each.original_title,
            posterImageUrl:each.poster_path

        }))

        console.log(updatedData)

        this.setState({topMoviesList:updatedData})
    }

    render(){
        const {topMoviesList} = this.state

        return(
            <div>
                <h1 className='top-heading'>Top Rated</h1>
                <ul className='moviesList-container'>
                    {topMoviesList.map(each=>
                        
                        <Link to={`/${each.id}`}><Card details={each} key={each.id} /></Link>
                    )}
                </ul>
            </div>
        )
    }
}

export default Home