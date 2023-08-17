import React from 'react';
import { Container } from '@mui/material';

import { MovieCard } from '../MovieCard/MovieCard';
import { useFetchMovies } from '../../api/movies';
import { MovieItem } from '../../api/movies/types';

export const MoviesList = () => {

  const { loading, moviesList, error } = useFetchMovies();

  return (
    <Container maxWidth="md">
      {moviesList.map((movie: MovieItem) => <MovieCard movie={movie} />)}
    </Container>
  )
};
