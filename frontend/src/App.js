import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useSearchParams } from "react-router-dom";
import SignIn from './pages/SignIn';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import BrowseByMovie from './pages/BrowseByMovie';
import './style/App.css'

import Message from './components/Message';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import red from '@mui/material/colors/red';
import pink from '@mui/material/colors/pink';
import purple from '@mui/material/colors/purple';
import deepPurple from '@mui/material/colors/deepPurple';
import indigo from '@mui/material/colors/indigo';
import blue from '@mui/material/colors/blue';
import lightBlue from '@mui/material/colors/lightBlue';
import cyan from '@mui/material/colors/cyan';
import teal from '@mui/material/colors/teal';
import green from '@mui/material/colors/green';
import lightGreen from '@mui/material/colors/lightGreen';
import lime from '@mui/material/colors/lime';
import yellow from '@mui/material/colors/yellow';
import amber from '@mui/material/colors/amber';
import orange from '@mui/material/colors/orange';
import deepOrange from '@mui/material/colors/deepOrange';
import brown from '@mui/material/colors/brown';
import grey from '@mui/material/colors/grey';
import blueGrey from '@mui/material/colors/blueGrey';
import { apiSignInWithGoogle } from './api/auth.api';

const http = require('axios');

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: purple
  },
});


const SignInWithGoogle = ({ loggedIn, setLoggedIn, setStatus }) => {
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    const init = async () => {
      try {
        const response = await apiSignInWithGoogle(code);
        setLoggedIn("Google")
        navigate("/")
      } catch (error) {
        console.log(error);
      }
    }
    init();
  }, [])

  return (
    <>
    </>
  )
}

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [status, setStatus] = useState(false);

  let navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setStatus(false);
    navigate("/");
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar signOut={signOut} loggedIn={loggedIn} />
        {status && <Message status={status} setStatus={setStatus} />}
        <Routes>
          <Route path="/" element={
            <Homepage
              loggedIn={loggedIn}
              setStatus={setStatus}
            />}
          />
          <Route path="callback" element={
            <SignInWithGoogle
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setStatus={setStatus}
            />}
          />
          <Route
            path="signIn"
            element={
              <SignIn
                setStatus={setStatus}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path="dashboard"
            element={
              <Dashboard setStatus={setStatus} />
            }
          />
          <Route
            path="browsebymovies"
            element={
              <BrowseByMovie
                loggedIn={loggedIn}
                setStatus={setStatus} />
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
