import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


const MyReviews = ({ review, movieTitle }) => {
	console.log(review)
  return (
	<Container
		sx={{
			marginBottom: '60px'
		}}
	>
		  <Typography align='center' variant='h5' gutterBottom='true'>
			{review.title}
		</Typography>

		<Typography align='justify'>
			{review.description}
		</Typography >
		  

		  {
			  review.reviews.map(rev => <>
				  {/* <Typography align='justify'>
					  {review.description}
				  </Typography > */}
				  <Box
					  sx={{
						  display: 'flex',
						  justifyContent: 'space-between',
						  flexDirection: 'column',
						  margin: '20px 0',
						  width: '100%'
					  }}
				  >
					  <p><b>Rating:</b> {rev.score}</p>
					  <p><b>Date of review:</b> {rev.timestamp}</p>
					  <p><b>Review:</b> {rev.description}</p>
					  
				  </Box>
			  </>)
		  }

	  </Container>
  )
}
/*  movie description
 
*/


export default MyReviews