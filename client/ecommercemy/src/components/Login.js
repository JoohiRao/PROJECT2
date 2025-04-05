import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Login = () => {
  return (
    <Box 
      sx={{ width: 300, mx: 'auto', mt: 10, p: 3, border: '1px solid #ccc', borderRadius: 2 }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Login
      </Typography>
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
