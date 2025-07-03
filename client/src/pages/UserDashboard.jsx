import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function UserDashboard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>User Dashboard</Typography>
        <Typography variant="body1">Welcome, User! (This is a placeholder page.)</Typography>
      </CardContent>
    </Card>
  );
}

export default UserDashboard;
