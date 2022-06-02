import React from 'react'
import Button from '@mui/material/Button';
import { Popup } from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import LeaveReview from './LeaveReview';

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
                {/* <Button className='addReview' variant='outlined'>Add review</Button> */}
                <Popup trigger={<Button className='addReview' variant='outlined'> Add review</Button>} modal
                    nested>
                    <LeaveReview />
                </Popup>
            </div>
        </div>
    )
}

export default Movie