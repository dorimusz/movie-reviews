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
import http from 'axios'


const LeaveReview = () => {
	const [rating, setRating] = useState(null);
	const [reviewText, setReviewText] = useState('')

	const handleSendRewiewBtn = async () => {
		await http.post('https://localhost:4000/movies/')
		//ertekelest elkuldeni db-be!!!!!!!!!!!!!!
		//reviewt elkuldeni db-be!!!!!!!!!!!!!!
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
		<Button variant='contained' onClick={handleSendRewiewBtn}>Send in my review</Button>  
		</FormControl>
		
	</Container>
  )
}

export default LeaveReview