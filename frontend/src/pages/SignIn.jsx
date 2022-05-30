import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleIcon from '@mui/icons-material/Google';

export default function SignIn({setStatus, loggedIn, setLoggedIn}) {

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Button
            onClick={() => window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=423125049963-vnhlm59vvirdjsquu0efhqvq5u91orks.apps.googleusercontent.com&scope=openid%20email%20profile&redirect_uri=http%3A//localhost:3000/callback"}
            fullWidth
            variant="contained"
            startIcon={<GoogleIcon />}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In with Google
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}