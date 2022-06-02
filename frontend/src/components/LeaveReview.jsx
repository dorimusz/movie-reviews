import React, { useState } from 'react'
import 'reactjs-popup/dist/index.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import http from 'axios';
import jwt_decode from "jwt-decode";
// import AddMovie from '../common/addMovie'
const myBackEndURL = "http://localhost:4000/api";


const LeaveReview = ({ searchedMovie }) => {
	const [rating, setRating] = useState(null);
	const [reviewText, setReviewText] = useState('')

	// // const handleSendRewiewBtn = async() => {
	// const handleSendRewiewBtn = () => {
	// 	AddMovie(searchedMovie, rating, reviewText);

	// 	/*
	// 	await http.post('https://localhost:4000/movies/')
	// 	//ertekelest elkuldeni db-be!!!!!!!!!!!!!!
	// 	//reviewt elkuldeni db-be!!!!!!!!!!!!!!
	// 	*/
	// }


	const addMovie = async (searchedMovie, rating, reviewText) => {
		console.log('addMovie : ', searchedMovie)
		try {
			//ide a filmnek a milyen id-ja kell tho?
			const decoded = jwt_decode(localStorage.getItem('token'));

			const response = await http.post(`${myBackEndURL}/movies/${searchedMovie.id}/reviews`, {
				description: reviewText,
				score: rating,
				user_id: decoded._id,
				movie_title: searchedMovie.original_title,
				movie_description: searchedMovie.overview,
			},
				{
					headers: {
						'x-access-token': localStorage.getItem("token"),
					}
				});
			console.log(response)
			return (response)

		} catch (error) {

			if (!error.response) return (error);
			return error.response;
		}
	}


	console.log(reviewText)
	return (
		<Container
			maxWidth="lg"
		// sx={{
		// 	width: '100%',
		// 	height:'100%'
		// }}
		>
			<Box>
				<Typography variant='h5' align='center' m={2}>Leave a review</Typography>
				<Typography variantMapping='p'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptate eveniet fugiat autem numquam error beatae, dolorem tenetur dolores temporibus ullam consequatur laboriosam minima rerum suscipit illum quae ab id.
				</Typography>
			</Box>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Rating</InputLabel>
				<Select
					//   labelId="demo-simple-select-label"
					//   id="demo-simple-select"
					value={rating}
					label="rating"
					onChange={e => setRating(e.target.value)}
				>
					<MenuItem value={1}>⭐️</MenuItem>
					<MenuItem value={2}>⭐️⭐️</MenuItem>
					<MenuItem value={3}>⭐️⭐️⭐️</MenuItem>
					<MenuItem value={4}>⭐️⭐️⭐️⭐️</MenuItem>
					<MenuItem value={5}>⭐️⭐️⭐️⭐️⭐️</MenuItem>
				</Select>

				<TextField
					id="outlined-multiline-static"
					//   label="Rewiew"
					multiline
					rows={8}
					placeholder="Write your review here..."
					value={reviewText}
					onChange={e => setReviewText(e.target.value)}
				/>
				{/* ////send data to database */}
				<Button variant='contained' onClick={() => addMovie(searchedMovie, rating, reviewText)}>Send in my review</Button>
			</FormControl>

		</Container>
	)
}

export default LeaveReview