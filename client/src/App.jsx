import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import DriverDashboard from './pages/DriverDashboard';
import UserDashboard from './pages/UserDashboard';
import BusSearch from './pages/BusSearch';
import Fade from '@mui/material/Fade';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Bus
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Fade in={true} timeout={900}>
          <Box sx={{ boxShadow: 3, borderRadius: 2, p: 3, bgcolor: 'background.paper' }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/driver" element={<DriverDashboard />} />
              <Route path="/user" element={<UserDashboard />} />
              <Route path="/search" element={<BusSearch />} />
              <Route path="/" element={<div>Home Page (placeholder)</div>} />
            </Routes>
          </Box>
        </Fade>
      </Container>
    </Router>
  );
}

export default App;
