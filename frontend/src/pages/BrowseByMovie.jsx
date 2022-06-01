import React, { useState, useEffect } from 'react'
import PopularMovies from '../components/PopularMovies'
//search by movie title and popular movies


const BrowseByMovie = ({ loggedIn, setStatus }) => {

    useEffect(() => {

    }, [])


    return (
        <>
            {loggedIn ?
                < PopularMovies />
                :
                <h2>You are not logged in.</h2>
            }

        </>
    )
}

export default BrowseByMovie