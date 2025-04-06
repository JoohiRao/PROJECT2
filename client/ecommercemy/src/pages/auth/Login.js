import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import API from "../../api/axiosConfig";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/api/auth/login", form);
      console.log("Login Success", data);
      // store token, redirect etc.
    } catch (error) {
      console.error("Login Error:", error.response?.data?.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth margin="normal" name="email" label="Email" type="email" onChange={handleChange} />
        <TextField fullWidth margin="normal" name="password" label="Password" type="password" onChange={handleChange} />
        <Box mt={2}>
          <Button type="submit" variant="contained" fullWidth>Login</Button>
        </Box>
      </form>
    </Container>
  );
};

export default Login;
