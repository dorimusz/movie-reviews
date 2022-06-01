import React from 'react'
import Button from '@mui/material/Button';

const Movie = ({ popularMovie }) => {
    const imgPath = () => {
        const path = popularMovie.poster_path
        const src = `https://image.tmdb.org/t/p/original${path}`
        return src
    }

    return (
        <div className='movieCard'>
            <div className='movieImage'>
                <img src={imgPath()} />
            </div>
            <div className='movieInfos'>
                <h3>{popularMovie.original_title}</h3>
                <p>{popularMovie.release_date}</p>
                <p>{popularMovie.overview}</p>
            </div>

            <div className='buttonHolder'>
                <Button className='addReview'>Add review</Button>
            </div>
        </div>
    )
}

export default Movie