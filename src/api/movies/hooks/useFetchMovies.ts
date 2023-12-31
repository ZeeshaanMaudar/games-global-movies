import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

import { MovieItem } from '../types';
import { endpoint } from '../../constants';

import { filterMoviesByGenre } from '../../../shared/helpers/filterMoviesByGenre';
import { searchMoviesByTitle } from '../../../shared/helpers/searchMoviesByTitle';
import { useFetchMoviesProps } from './types';

export const useFetchMovies = ({ sortByGenre, search }: useFetchMoviesProps) => {
	const [loading, setLoading] = useState(false);
	const [moviesList, setMoviesList] = useState<MovieItem[]>([]);
	const [updatedMoviesList, setUpdatedMoviesList] = useState<MovieItem[]>([]);
	const [error, setError] = useState<AxiosError>();

	useEffect(() => {
		setLoading(true)

    axios.get(endpoint)
      .then(response => {
        setMoviesList(response.data.movies);
      })
      .catch((error: AxiosError) => {
        setError(error);
      })
      .finally(() => setLoading(false));
	}, []);

  useEffect(() => {
    const sortedMoviesList = filterMoviesByGenre(moviesList, sortByGenre);
    const searchedMoviesList = searchMoviesByTitle(sortedMoviesList, search)
    setUpdatedMoviesList(searchedMoviesList);
  }, [moviesList, sortByGenre, search]);

	return { loading, moviesList, updatedMoviesList, error };
};