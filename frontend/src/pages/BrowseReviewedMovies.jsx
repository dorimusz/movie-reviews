import { TextField } from "@mui/material"
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import http from 'axios'
import MyMovie from "../components/MyMovie";

const BrowseReviewedMovies = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const [movies, setMovies] = useState([])

    const searchMovie = async () => {
        const response = await http.post(`http://localhost:4000/api/movies/search`, { "searchTitle": searchTitle });
        console.log(response.data)
        setMovies(response.data)
    }

    return (
        <>
            <div className="searchContainer">
                <TextField value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} >
                </TextField>
                <Button onClick={searchMovie}> Search movie review</Button>
                {movies.length > 0 ?
                    movies.map((movie, index) => <MyMovie movie={movie} key={index} />)
                    :
                    "Start searching reviewed movies"
                }
            </div>
        </>
    )
}

export default BrowseReviewedMovies