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
			  {review.description}
		  </Typography>
		  <Typography align='center' variant='h5' gutterBottom='true'>
			  {review.title}
		  </Typography>

		  {
			  review.reviews.map(rev => <>
				  <Typography align='justify'>
					  {review.description}
				  </Typography >
				  <Box
					  sx={{
						  display: 'flex',
						  justifyContent: 'space-between',
						  margin: '20px 0',
						  width: '30%'
					  }}
				  >
					  <p>Rating:{rev.score}</p>
					  <p>Review:{rev.description}</p>
					  <p>Date of review:{rev.timestamp}</p>
				  </Box>
			  </>)
		  }

	  </Container>
  )
}
/*  movie description
 
*/


export default MyReviews