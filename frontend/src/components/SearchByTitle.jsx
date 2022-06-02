import React, { useEffect, useState } from 'react';
import http from 'axios'
import SearchMovie from './SearchMovie'

const SearchByTitle = () => {
    const [searchKeyword, setSearchKeyword] = useState(null);
    const [searchUrl, setSearchUrl] = useState("");
    const [movies, setMovies] = useState([]);

    const load = async () => {
        console.log(searchUrl.length)
        const response = searchUrl.length > 0 ? await http.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_SECRET_KEY}&query=${searchUrl}`) 
        : await http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_SECRET_KEY}`)
        // https://api.themoviedb.org/3/search/movie?api_key=api_key=${process.env.REACT_APP_SECRET_KEY}&query=${movieSearch}&page=${pageNumber}`);
        setMovies(response.data.results)
        // console.log(response.data.results)
        console.log(response)
    }

    useEffect(() => {
        load();
    }, [searchUrl])

    const startSearch = (e) => {
        setSearchUrl(searchKeyword)
        e.preventDefault();
    }
    return (
        <div className='searchByMovie'>
            <h2 className='h2title'>Try searching by title</h2>
            <div className='searchMoviesContainer'>
                <form className="searchbar">
                    <p> <labelel>Search for title:</labelel> </p>
                    <input
                        list="creator-list"
                        id="searchMovie"
                        placeholder="Search for title"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />

                    <button
                        className="searchButtons"
                        // disabled={
                        //     searchKeyword.length >= 3 || searchKeyword.length === 0 ? false : true
                        // }
                        onClick={(e) => startSearch(e)}
                    >
                        Search
                    </button>
                </form>

                <div className='movieContainer'>
                    {movies ? movies.map((movie, i) => <SearchMovie searchedMovie={movie} key={i} />) : "Movies are loading"}

                </div>
            </div>
        </div>
    )
}

export default SearchByTitle