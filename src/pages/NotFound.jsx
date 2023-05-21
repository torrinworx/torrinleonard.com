import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import FloatingCard from '../components/FloatingCard';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={5}>
      <FloatingCard type="invisible" size="small" />
      <Typography variant="h2" gutterBottom>
        404: Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go Home
      </Button>
      <FloatingCard type="invisible" size="small"/>
    </Box>
  );
};

export default NotFound;