import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


const MyReviews = ({review}) => {
  return (
	<Container
		sx={{
			marginBottom: '60px'
		}}
	>
		{/* Movie title */}
		{/* <Typography align='center' variant='h5' gutterBottom='true'>
			{review.title}
		</Typography> */}
		<Typography variant='h5' gutterBottom='true'>
			Movie title
		</Typography>

		{/* movie description */}
		{/* <Typography align='justify'>
			{review.description}
		</Typography >*/}
		<Typography align='justify'>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, odio quidem! Fugit corporis nisi maiores cum rerum praesentium, ab doloremque perspiciatis quo ea cumque, nesciunt voluptas. Itaque tempora ipsum consequatur.
		</Typography >

		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				margin: '20px 0',
				width: '30%'
			}}
		>
			{/* <p><b>Rating:</b>{review.rating}</p>
			<p><b>Date of review:</b>{review.dateOfReview}</p> */}
			<p><b>Rating:</b> 4.6</p>
			<p><b>Date of review:</b> 2016.02.06</p>
		</Box>
	</Container>
  )
}

export default MyReviews