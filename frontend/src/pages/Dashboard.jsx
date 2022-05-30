import React, { useState, useEffect } from 'react'
import { apiCallRestrictedFunction } from '../api/auth.api';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Dashboard = ({setStatus}) => {

  const [data, setData] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await apiCallRestrictedFunction();
        if (response.data) {
          if (response.status === 200) {
            setStatus(false);
            setData(response.data.data)
            return true;
          } else {
            setStatus(response.status);
          }
        } else {
          if (response.status) {
            setStatus(response.status);
          } else {
            setStatus("networkError");
          }
        }
      } catch(error) {
        setStatus(909);
      }
    }
    init();
  }, [])

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
      <div>
        <h2>Dashboard</h2>
        { data && <p>{data}</p>}
      </div>
      </Box>
    </Container>
  )
}

export default Dashboard