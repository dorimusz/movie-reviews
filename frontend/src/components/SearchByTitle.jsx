import React, { useEffect, useState } from 'react';
import http from 'axios'
import SearchMovie from './SearchMovie'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button'

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
            
            <Box className='searchMoviesContainer' textAlign='center'>
                <Box m={5}>
                    <form className="searchbar">
                        <TextField
                            variant='outlined'
                            list="creator-list"
                            id="searchMovie"
                            placeholder="Search for title"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                        />

                        <Button
                            
                            variant='outlined'
                            className="searchButtons"
                            // disabled={
                            //     searchKeyword.length >= 3 || searchKeyword.length === 0 ? false : true
                            // }
                            onClick={(e) => startSearch(e)}
                        >
                            Search
                        </Button>
                     </form>
                </Box>
                <div className='movieContainer'>
                    {movies ? movies.map((movie, i) => <SearchMovie searchedMovie={movie} key={i} />) : "Movies are loading"}

                </div>
            </Box>
        </div>
    )
}

export default SearchByTitle