import { TextField } from "@mui/material"
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import http from 'axios'

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
            <TextField value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} >
            </TextField>
            <Button onClick={searchMovie}> Search movie review</Button>
        </>
    )
}

export default BrowseReviewedMovies