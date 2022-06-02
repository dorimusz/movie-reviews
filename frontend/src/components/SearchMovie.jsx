import React from 'react'
import Button from '@mui/material/Button';
import { Popup } from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import LeaveReview from './LeaveReview';
import '../style/searchMovie.css'

const SearchMovie = ({ searchedMovie }) => {
    const imgPath = () => {
        // console.log(searchedMovie)
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
                {/* <Button className='addReview' variant='outlined'>Add review</Button> */}
                <Popup trigger={<Button className='addReview' variant='outlined'> Add review</Button>} modal
                    nested>
                    <LeaveReview searchedMovie={searchedMovie} />
                </Popup>
            </div>
        </div>
    )
}

export default SearchMovie