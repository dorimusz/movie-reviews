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
import Rating from '@mui/material/Rating';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import http from 'axios';
import jwt_decode from "jwt-decode";
// import AddMovie from '../common/addMovie'
const myBackEndURL = "http://localhost:4000/api";


const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LeaveReview = ({ searchedMovie }) => {

	const [value, setValue] = React.useState(2);
	const [reviewText, setReviewText] = useState('')
	const [reviewCreated, setReviewCreated] = useState(true)
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

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
			setReviewCreated(true)
			setValue(2)
			setReviewText('')
			return (response)

		} catch (error) {
			setReviewCreated(false)
			if (!error.response) return (error);
			return error.response;
		}
	}

	return (
		<Container
			maxWidth="lg"
			sx={{
				marginBottom: '30px'
			}}
		>
			<Box>
				<Typography variant='h5' align='center' m={2}>Leave a review</Typography>
				<Typography variantMapping='p'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptate eveniet fugiat autem numquam error beatae, dolorem tenetur dolores temporibus ullam consequatur laboriosam minima rerum suscipit illum quae ab id.
				</Typography>
			</Box>
			<FormControl fullWidth>
				<Typography component="legend" mt={2}>Rate:</Typography>
				<Rating
					name="simple-controlled"
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				/>
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
				<Button variant='contained' onClick={() => { addMovie(searchedMovie, value, reviewText); handleClick() }}>Send in my review</Button>
				
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>

					{reviewCreated ? 
					<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
						 Review Added! 🎉
					</Alert> :
					<Alert severity="error">Jezzz.. Something went wrong! Try to signin again!</Alert>
					}

				</Snackbar>
			</FormControl>

		</Container>
	)
}

export default LeaveReview