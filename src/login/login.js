import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import './login.css';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add Login Stuff Here
  };

  return (
    <Box id='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px'}}>
      {/* <Typography variant="h4" gutterBottom>
        JournalJams
      </Typography> */}
      <img src="/journaljamslogo.png" alt="JournalJams Logo" style={{ height: '100px', marginBottom: '20px' }} />
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
