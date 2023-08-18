import React, { FC } from 'react';

import { MovieCard } from '../MovieCard/MovieCard';
import { MovieItem } from '../../api/movies/types';
import { MoviesListProps } from './types';

export const MoviesList: FC<MoviesListProps> = ({ moviesList }) => {

  return (
    <div>
      {moviesList.map((movie: MovieItem) => <MovieCard key={movie.title} movie={movie} />)}
    </div>
  )
};
