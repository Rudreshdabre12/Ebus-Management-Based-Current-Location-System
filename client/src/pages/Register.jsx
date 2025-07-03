import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert, Stack, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user', contactInfo: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      setSuccess('Registration successful! You can now login.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <Typography variant="h4" align="center" gutterBottom>Register</Typography>
      <Stack spacing={2}>
        <TextField
          name="name"
          label="Name"
          value={form.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          name="email"
          type="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          value={form.password}
          onChange={handleChange}
          required
          fullWidth
        />
        <FormControl fullWidth required>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            name="role"
            value={form.role}
            label="Role"
            onChange={handleChange}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="driver">Driver</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="contactInfo"
          label="Contact Info"
          value={form.contactInfo}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
          Register
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
      </Stack>
    </Box>
  );
}

export default Register;
