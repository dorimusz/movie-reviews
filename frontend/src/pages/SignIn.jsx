import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { apiSignIn } from '../api/auth.api';

export default function SignIn({setStatus, loggedIn, setLoggedIn}) {
  const [sendStatus, setSendStatus] = useState(false);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    credential: 'Please type your username or email address to login!',
    password: 'Please type your password!',
  });

  let navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target;
    const regexEmail = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    const regexUsername = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

    let updatedErrors = errors

    switch (name) {
      case 'credential': 
        if (value.length < 5) {
          updatedErrors.credential = 'The credential must be 5 characters length!'
        } else {
          if (value.includes('@') && !regexEmail.test(value)) {
            updatedErrors.credential = 'Wrong email address!'
          } else if (!regexUsername.test(value)) {
            updatedErrors.credential = 'The username must be 8-20 characters length! (aplhanumeric characters or . or _ allowed)'
          }
          updatedErrors.credential = '';
        }
        setCredential(value);
        break;
      case 'password': 
        if (value.length < 5) {
          updatedErrors.password = 'The password must be 5 characters length!'
        } else {
          updatedErrors.password = '';
        }
        setPassword(value);
        break;
      default:
        break;
    }
    setSendStatus(true)
    for (let item in updatedErrors) {
      if (updatedErrors[item]) setSendStatus(false)
    }
    setErrors({
      ...updatedErrors
    })
  };

  const signIn = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const elements = {
      credential: data.get('credential'),
      password: data.get('password')
    }
    try {
      const response = await apiSignIn(elements);
      if (response.data) {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          setStatus(false);
          setLoggedIn(true);
          setPassword("");
          navigate("/");
          return true;
        } else {
          setStatus(response.status);
        }
      } else {
        console.log(response)
        if (response.status) {
          setStatus(response.status);
        } else {
          setStatus("networkError");
        }
      }
    } catch(error) {
      setStatus(909);
      setPassword("");
    }
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      {/* <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}> */}
        <Box
          sx={{
            marginTop: 8,
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
        <Box component="form" onSubmit={signIn} noValidate sx={{ mt: 1 }}>
          <Button
            onClick={() => window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=423125049963-vnhlm59vvirdjsquu0efhqvq5u91orks.apps.googleusercontent.com&scope=openid%20email%20profile&redirect_uri=http%3A//localhost:3000/callback"}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
}