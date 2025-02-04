import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchCard from './SearchCard';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false); // Control the modal visibility


  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

   // Function to open the modal
   const handleOpenSearch = () => {
    setSearchOpen(true);
  };

  // Function to close the modal
  const handleCloseSearch = () => {
    setSearchOpen(false);
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{
        background: 'linear-gradient(45deg, rgb(242, 18, 235), rgb(241, 100, 39))', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        padding: '10px 0',
        zIndex: 1200, // Ensures it's always on top
      }}
    >
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/M_Logo.png" 
              alt="Matrimony Logo"
              style={{ width: '60px', height: '60px', marginRight: '10px'}} 
            />
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
              Matrimony
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Link to="/" className="text-white">
              <Button variant="text" sx={{ color: '#fff', fontWeight: '500' }}>
                Home
              </Button>
            </Link>
            <Link to="#" className="text-white">
              <Button variant="text" sx={{ color: '#fff', fontWeight: '500' }} onClick={handleOpenSearch} className="search-btn">
                Search         

              </Button>
            </Link>
            <Link to="#" className="text-white">
              <Button variant="text" sx={{ color: '#fff', fontWeight: '500' }}>
                About Us
              </Button>
            </Link>
            <Link to="#" className="text-white">
              <Button variant="text" sx={{ color: '#fff', fontWeight: '500' }}>
                Contact
              </Button>
            </Link>

            {/* Sign Up Button */}
            <Link to="/signin">
              <Button variant="contained" color="primary" sx={{ borderRadius: '20px', fontWeight: '500' }}>
                Login Now
              </Button>
            </Link>
          </Box>

          {/* Mobile Hamburger Menu */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem button>
              <Link to="/" className="text-black">
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="#" className="text-black">
                <ListItemText primary="Search" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="#" className="text-black">
                <ListItemText primary="About Us" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="#" className="text-black">
                <ListItemText primary="Contact" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/signin" className="text-black">
                <ListItemText primary="Login Now" />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {isSearchOpen && <SearchCard handleClose={handleCloseSearch} />}

    </AppBar>
  );
};

export default Navbar;
