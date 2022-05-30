import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { Link } from "react-router-dom";

const ResponsiveAppBar = ({ signOut, loggedIn }) => {
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <MovieFilterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Link>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/">
              MOVIE-REVIEWS
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              { loggedIn ? 
                <div>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" onClick={signOut}>
                       Sign Out
                    </Typography>
                  </MenuItem>
                </div>
                : 
                <div>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to="signIn">
                        Sign In
                      </Link>
                    </Typography>
                  </MenuItem>
                </div>
              }
            </Menu>
          </Box>
          <Link to="/">
            <MovieFilterIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          </Link>
          <Typography
              variant="h5"
              noWrap
              // component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to="/">
              MOVIE-REVIEWS
              </Link>
          </Typography>

          { loggedIn ? 
            <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
              <div>
                <Button onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="/">
                      Content
                    </Link>
                  </Typography>
                </Button>
              </div>
            </Box>
            : 
            <Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'none', md: 'flex' } }}>
              <div>
                <Button onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="signIn">
                      Sign In
                    </Link>
                  </Typography>
                </Button>
              </div>
            </Box>
            }

          { loggedIn && 
          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link to="dashboard">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    Dashboard
                  </Typography>
                </MenuItem>
              </Link>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={signOut}>
                  Sign out
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
