import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export const MovieCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          The Godfather
        </Typography>
        <Typography variant="body2">
          Year: 1972
        </Typography>
        <Typography variant="body2">
          Genre: Multiple
        </Typography>
        <Typography variant="body2">
          Director: Francis Ford Coppola
        </Typography>
        <Typography variant="body2">
          Actors: Multiple
        </Typography>
        <Typography variant="body2">
          Rating: 9.2
        </Typography>
      </CardContent>
    </Card>
  )
};
