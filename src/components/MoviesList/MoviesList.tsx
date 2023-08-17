import React from 'react';
import { Container } from '@mui/material';

import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = () => {
  return (
    <Container maxWidth="md">
      <MovieCard />
    </Container>
  )
};
