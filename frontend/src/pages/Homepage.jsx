import React, { useState, useEffect } from 'react';
import http from 'axios'
// import { apiGetContent } from '../api/auth.api'
// import BrowseByMovie from './BrowseByMovie'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import MyReviews from '../components/MyReviews';
import jwt_decode from "jwt-decode";
import MyReviewedMovies from '../components/MyReviewedMovies';
// import { margin } from '@mui/system';
// import { containerClasses } from '@mui/material';

const Homepage = ({ loggedIn, setStatus }) => {
  // const [content, setContent] = useState(false);

  // const getContent = async (endpoint) => {
  //   const response = await apiGetContent(endpoint);
  //   if (response.data) {
  //     if (response.status === 200) {
  //       setContent(response.data.content)
  //     } else {
  //       setContent(false);
  //       setStatus(response.status);
  //     }
  //   } else {
  //     if (response.status) {
  //       setStatus(response.status);
  //     } else {
  //       setStatus("networkError");
  //     }
  //   }
  // };


  const [myReviews, setMyReviews] = useState([])


  
  const getReviews = async () => {
    const token = localStorage.getItem("token")
    const decoded = jwt_decode(token);
    const userId = decoded._id
    const response = await http.get(`http://localhost:4000/api/user/${userId}/reviews`, { headers: { 'x-access-token': token } });
    console.log(response.data)
    setMyReviews(response.data)
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <Container component="main" maxWidth="lg">
      <Box>
        {loggedIn ?
          <>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '60px'
              }}
            >
              <h2>Welcome USERNAME</h2>
            </Box>
            {/* <BrowseByMovie /> */}
          </>
          :
          <>
            <h2>You are not logged in.</h2>
          </>
        }
        {loggedIn &&
          <Container>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                bgcolor: 'lightGray'
              }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <h3>You're in good company</h3>
                  <p
                    sx={{
                      margin: '10px'
                    }}
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam magnam architecto. Odio, ipsam. Autem odio tenetur delectus fugiat quas beatae recusandae iure atque placeat, voluptatem minima, facilis tempora dolores.</p>
                </Box>
                <Box>
                  <Button variant="contained"
                    sx={{
                      width: '200px',
                      padding: '30px',
                      margin: '20px 20px 40px'
                    }}
                  >
                    Browse movies
                  </Button>
                </Box>
              </Box>
            <Box>
              <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '60px'
              }}>
                <h3>Your reviews so far</h3>
              </Box>

              {myReviews.map((review, i) => <MyReviews review={review} />)}

              <Box textAlign='center' mb={10} >
                <Button variant='contained'>Add new review</Button>
              </Box>
            </Box>
          </Container>
        }
      </Box>




      {/* <button onClick={() => getContent('/public')}>Public content</button> */}
      {/* {content &&
        <section className="content">
          {content}
        </section>
      } */}


    </Container>
  );
};

export default Homepage;