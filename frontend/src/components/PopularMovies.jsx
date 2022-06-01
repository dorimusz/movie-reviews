import React, { useEffect, useState } from 'react';
import Movie from './Movie'
import http from 'axios'

const GetPopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState(null);



    const load = async () => {
        const response = await http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_SECRET_KEY}`);
        setPopularMovies(response.data.results)
        console.log(response.data.results)
    }

    useEffect(() => {
        load();
    }, [])

    return (
        <div className='popUlarMovies'>
            <h2 className='h2title'>Don't have anything in mind? Review the most popular ones.</h2>
            <div className='movieContainer'>
                {popularMovies ? popularMovies.map((movie, i) => <Movie popularMovie={movie} key={i} />) : "Movies are loading"}

            </div>
        </div>
    )
}

export default GetPopularMovies