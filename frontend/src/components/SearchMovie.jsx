import React from 'react'
import Button from '@mui/material/Button';

const SearchMovie = ({ searchedMovie }) => {
    const imgPath = () => {
        const path = searchedMovie.poster_path
        const src = `https://image.tmdb.org/t/p/original${path}`
        return src
    }

    return (
        <div className='movieCard'>
            <div className='movieImage'>
                <img src={imgPath()} />
            </div>
            <div className='movieInfos'>
                <h3>{searchedMovie.original_title}</h3>
                <p>{searchedMovie.release_date}</p>
                <p>{searchedMovie.overview}</p>
            </div>

            <div className='buttonHolder'>
                <Button className='addReview'>Add review</Button>
            </div>
        </div>
    )
}

export default SearchMovie