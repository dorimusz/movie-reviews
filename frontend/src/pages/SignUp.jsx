import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { apiSignUp, apiFindUserByEmail, apiFindUserByUsername } from '../api/auth.api';

export default function SignUp({setStatus}) {
  const [sendStatus, setSendStatus] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    firstName: 'Please fill out the name field!',
    username: 'Choose a unique username!',
    email: 'Please enter your email address',
    password: 'Choose a strong password!',
    confirmPassword: 'Confirm your password!',
  });

  const handleChange = async (event) => {
    const {name, value} = event.target;
    const regexEmail = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    const regexUsername = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

    let updatedErrors = errors

    switch (name) {
      case 'firstName': 
        if (value.length < 5) {
          updatedErrors.firstName = 'The name must be 5 characters length!'
        } else {
          updatedErrors.firstName = '';
        }
        setFirstName(value);
        break;
      case 'lastName': 
        setLastName(value);
        break;
      case 'username': 
        if (!regexUsername.test(value)) {
          updatedErrors.username = 'The username must be 8-20 aplhanumeric characters!';
        } else {
          let answer = await apiFindUserByUsername(name,value)
          if ( answer === 204 ) {
            updatedErrors.username = 'Reserved username.'
          } else {
            updatedErrors.username = '';
          }
        }
        setUsername(value);
        break;
      case 'email':
        if (!regexEmail.test(value)) {
          updatedErrors.email = 'Wrong e-mail address!'
        } else {
          let answer = await apiFindUserByEmail(name,value)
          if ( answer === 204 ) {
            updatedErrors.email = 'Reserved email address.'
          } else {
            updatedErrors.email = '';
          }
        }
        setEmail(value);
        break;
      case 'password': 
        if (value.length < 5) {
          updatedErrors.password = 'The password must be 5 characters length!'
        } else {
          if (value === username) {
            updatedErrors.password = 'Password cannot match username';
          } else {
            updatedErrors.password = '';
          }
        }
        setPassword(value);
        break;
      case 'confirmPassword':
        if (value !== password) {
          updatedErrors.confirmPassword = 'The confirm must be equal with password field value!'
        } else {
          updatedErrors.confirmPassword = '';
        }
        setConfirmPassword(value);
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

  const signUp = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const elements = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password')
    }
    try {
      const response = await apiSignUp(elements);
      if (response.data) {
        if (response.status === 200) {
          setFirstName("");
          setLastName("");
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setSignedUp(true);
        } else {
          setStatus(response.status);
          setPassword("");
          setConfirmPassword("");
        }
      } else {
        if (response.status) {
          setStatus(response.status);
          setPassword("");
          setConfirmPassword("");
        } else {
          setStatus("networkError");
          setPassword("");
          setConfirmPassword("");
        }
      }
    } catch(error) {
      setStatus(909);
      setPassword("");
      setConfirmPassword("");
    }
  }

  return (
    <>
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
        { signedUp ?
          <>
            <h2>Congratulations!</h2>
            <p>You have successfully registered the site. Please, verify your email to confirm your registration.</p>
          </>
        :
        <>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={signUp} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={firstName} onChange={handleChange} 
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  variant="standard"
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={lastName} onChange={handleChange} 
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  variant="standard"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={username} onChange={handleChange} 
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  variant="standard"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email} onChange={handleChange} 
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant="standard"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password} onChange={handleChange}  
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="standard"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={confirmPassword} onChange={handleChange}  
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  variant="standard"
                  />
              </Grid>
            </Grid>

            <div className="errorMessage">
              {errors.firstName && <span>{errors.firstName}</span>}
              {errors.username && <span>{errors.username}</span>}
              {errors.email && <span>{errors.email}</span>}
              {errors.password && <span>{errors.password}</span>}
              {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>

            <Button
              disabled={!sendStatus}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="signIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
         </>
        }
        </Box>
      {/* </Paper> */}
    </Container>
    </>
);
}