import React, { FC, useState } from 'react';
import { Typography } from '@mui/material';

import { useFetchMovies } from '../../api/movies';

import { MenuBar } from '../../components/MenuBar';
import { MoviesList } from '../../components/MoviesList/MoviesList';

import { getUniqueGenres } from '../../shared/helpers/getUniqueGenres';

import { Wrapper } from './styles';

export const MoviesPage: FC = () => {
  const [sortByGenre, setSortByGenre] = useState<string>('');

  const { loading, moviesList, sortedMoviesList, error } = useFetchMovies({ sortByGenre });

  const uniqueGenres = getUniqueGenres(moviesList);

  return (
    <Wrapper maxWidth="md">
      <Typography variant="h2" component="div">Movies</Typography>
      <MenuBar
        uniqueGenres={uniqueGenres}
        sortByGenre={sortByGenre}
        setSortByGenre={setSortByGenre}
        disabled={loading || !!error}
      />
      <MoviesList moviesList={sortedMoviesList} />
    </Wrapper>
  )
};
