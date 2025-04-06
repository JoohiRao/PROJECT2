import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Box,
  Alert,
} from "@mui/material";
import API from "../../api/axiosConfig";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer",
    address: "",
    contact: "",
    profilePic: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Simple frontend validation
    if (!form.name || !form.email || !form.password) {
      return setError("Name, Email, and Password are required.");
    }

    try {
      const { data } = await API.post("/api/auth/signup", form);

      // Store token locally
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data));

      setSuccess("User registered successfully!");
      console.log("Signup Success", data);

      // Optional: redirect to dashboard
      // navigate("/dashboard");

    } catch (err) {
      console.error("Signup Error:", err);
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="name"
          label="Name"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="password"
          label="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="address"
          label="Address"
          value={form.address}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="contact"
          label="Contact"
          value={form.contact}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="profilePic"
          label="Profile Pic URL"
          value={form.profilePic}
          onChange={handleChange}
        />
        <TextField
          select
          fullWidth
          margin="normal"
          name="role"
          label="Role"
          value={form.role}
          onChange={handleChange}
        >
          <MenuItem value="buyer">Buyer</MenuItem>
          <MenuItem value="seller">Seller</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </TextField>

        <Box mt={2}>
          <Button type="submit" variant="contained" fullWidth>
            Register
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Signup;
