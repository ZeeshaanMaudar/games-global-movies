import React, { FC } from 'react';

import { MovieCard } from '../MovieCard/MovieCard';
import { MovieItem } from '../../api/movies/types';
import { MoviesListProps } from './types';

import { Wrapper } from './styles';

export const MoviesList: FC<MoviesListProps> = ({ moviesList }) => {

  return (
    <Wrapper>
      {moviesList.map((movie: MovieItem) => <MovieCard key={movie.title} movie={movie} />)}
    </Wrapper>
  )
};
