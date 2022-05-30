import React, { useState } from 'react';
import { apiGetContent } from '../api/auth.api'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Homepage = ({ loggedIn, setStatus }) => {
  const [content, setContent] = useState(false);

  const getContent = async (endpoint) => {
    const response = await apiGetContent(endpoint);
    if (response.data) {
      if (response.status === 200) {
        setContent(response.data.content)
      } else {
        setContent(false);
        setStatus(response.status);
      }
    } else {
      if (response.status) {
        setStatus(response.status);
      } else {
        setStatus("networkError");
      }
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
        { loggedIn ? 
          <>
            <h2>Welcome</h2>
          </>
          : 
          <>
            <h2>You are not logged in.</h2>
          </>
        }
      </Box>
      {/* <button onClick={() => getContent('/public')}>Public content</button> */}
      { content && 
        <section className="content">
          {content}
        </section>
      }
      </Container>
  );
};

export default Homepage;