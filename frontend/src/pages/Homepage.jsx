import React, { useState, useEffect } from 'react';
import http from 'axios'
// import { apiGetContent } from '../api/auth.api'
// import BrowseByMovie from './BrowseByMovie'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import MyReviews from '../components/MyReviews';
import jwt_decode from "jwt-decode";
import { Typography } from '@mui/material';
import {Link } from "react-router-dom";
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
      // const decoded = jwt_decode(token);
    // const userId = decoded._id
    const response = await http.get(`http://localhost:4000/api/user/reviews`, { headers: { 'x-access-token': token } });
    console.log(response.data)
    setMyReviews(response.data)
  }

  useEffect(() => {
    if (loggedIn) getReviews()
  }, [])

  return (
    <Container component="main" maxWidth="lg">
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '60px'
          }}
        >
        {loggedIn ?
          <>
          <h2>Welcome</h2>
            {/* <BrowseByMovie /> */}
          </>
          :
          <>
            <h2>You are not logged in.</h2>
          </>
        }
        </Box>
        { loggedIn &&
          <Container>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                bgcolor: 'lightGray',
                padding: '20px'
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
                <Link to='/browsebymovies'>
                  <Button variant="contained"
                    sx={{
                      width: '200px',
                      padding: '30px',
                      margin: '20px 20px 20px'
                    }}
                    
                  >
                    Browse movies
                  </Button>
                </Link>
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
              {myReviews.length === 0 && <Typography>You don't have any reviews yet. </Typography>}
              {myReviews.map((review, i) => <MyReviews review={review} />)}

              <Box textAlign='center' mb={10} >
                <Link to='/browsebymovies'>
                  <Button variant='contained'>Add new review</Button>
                </Link>

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