import React, { useEffect, useState } from 'react';
import http from 'axios'

const SearchByTitle = () => {
    const [movieSearch, setMovieSearch] = useState(null);

    const load = async () => {
        // const response = await http.get(`
        // https://api.themoviedb.org/3/search/movie?api_key=api_key=${process.env.REACT_APP_SECRET_KEY}&query=${movieSearch}&page=${pageNumber}`);
        // setMovieSearch(response.data.results)
        // console.log(response.data.results)
    }

    useEffect(() => {
        load();
    }, [])

    return (
        <div className='searchByMovie'>
            <h2 className='h2title'>Try searching by title</h2>
            <div className='movieContainer'>


            </div>
        </div>
    )
}

export default SearchByTitle