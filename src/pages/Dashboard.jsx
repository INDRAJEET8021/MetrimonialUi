import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome to Your Dashboard</h2>
        <Card className="mb-4">
          <CardContent>
            <Typography variant="h6" component="div">
              Your Matches
            </Typography>
            <Typography variant="body2">
              John Doe, Age: 28
            </Typography>
            <Typography variant="body2">
              Jane Smith, Age: 26
            </Typography>
          </CardContent>
        </Card>
        <Button variant="contained" color="primary" fullWidth>
          View More Matches
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
