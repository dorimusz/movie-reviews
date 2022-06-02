import { TextField } from "@mui/material"
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import http from 'axios'

const BrowseReviewedMovies = () => {
    const [searchTitle, setSearchTitle] = useState("");



    const searchMovie = async () => {
        const response = await http.get('http://localhost:4000/api/movies/', {
            searchTitle: searchTitle
        });
        console.log(response)
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