import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useSearchParams } from "react-router-dom";
import SignIn from './pages/SignIn';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import BrowseByMovie from './pages/BrowseByMovie';
import './style/App.css'
import Message from './components/Message';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import BrowseReviewedMovies from './pages/BrowseReviewedMovies';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import purple from '@mui/material/colors/purple';
import deepPurple from '@mui/material/colors/deepPurple';

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

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'));
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
      {/* <Homepage loggedIn={true} /> */}
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
          <Route
            path="reviewedmovies"
            element={
              <BrowseReviewedMovies
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
