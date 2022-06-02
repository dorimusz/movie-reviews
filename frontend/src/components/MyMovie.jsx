import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Popup } from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import LeaveReview from './LeaveReview';

const MyMovie = ({ movie }) => {
    // const imgPath = () => {
    //     const path = popularMovie.poster_path
    //     const src = `https://image.tmdb.org/t/p/original${path}`
    //     return src
    // }
    const [showReview, setShowReview] = useState(false)
    const showTheReview = () => {
        setShowReview(true)
    }

    return (
        <div className='reviewedMovieContainer'>
            <div className='movieImage'>
                {/* <img src={imgPath()} /> */}
            </div>
            <div className='reviewedMovie'>
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>

                <Button onClick={showTheReview}>Show reviews</Button>
                {showReview && movie.reviews.map(rev => <>
                    <div				  >
                        <p><b>Rating:</b> {rev.score}</p>
                        <p><b>Review:</b> {rev.description}</p>
                        <p><b>Username/id:</b> {rev.user_id}</p>


                    </div>
                </>)
                }
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

export default MyMovie