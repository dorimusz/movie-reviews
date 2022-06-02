import React, { useState, useEffect } from 'react'
import PopularMovies from '../components/PopularMovies'
import SearchByTitle from '../components/SearchByTitle'
//search by movie title and popular movies


const BrowseByMovie = ({ loggedIn, setStatus }) => {

    // useEffect(() => {

    // }, [])


    return (
        <>
            {/* {loggedIn ? */}
            <SearchByTitle />
            {/* < PopularMovies /> */}

            {/* : <h2>You are not logged in.</h2>} */}


        </>
    )
}

export default BrowseByMovie