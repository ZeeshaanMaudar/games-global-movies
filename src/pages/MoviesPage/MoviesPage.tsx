import React, { FC, useState } from 'react';

import { useFetchMovies } from '../../api/movies';

import { MenuBar } from '../../components/MenuBar';
import { MoviesList } from '../../components/MoviesList/MoviesList';

import { getUniqueGenres } from '../../shared/helpers/getUniqueGenres';

import { Wrapper, Title } from './styles';

export const MoviesPage: FC = () => {
  const [sortByGenre, setSortByGenre] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const { loading, moviesList, updatedMoviesList, error } = useFetchMovies({ sortByGenre, search });

  const uniqueGenres = getUniqueGenres(moviesList);

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <Wrapper maxWidth="md">
      <Title variant="h2">Movies</Title>
      <MenuBar
        uniqueGenres={uniqueGenres}
        sortByGenre={sortByGenre}
        setSortByGenre={setSortByGenre}
        disabled={loading || !!error}
        search={search}
        handleSearch={handleSearch}
      />
      <MoviesList moviesList={updatedMoviesList} />
    </Wrapper>
  )
};
