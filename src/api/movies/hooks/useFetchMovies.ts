import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

import { MovieItem } from '../types';
import { BASE_URL } from '../../constants';

import { filterMoviesByGenre } from '../../../shared/helpers/filterMoviesByGenre';
import { useFetchMoviesProps } from './types';

export const useFetchMovies = ({ sortByGenre }: useFetchMoviesProps) => {
	const [loading, setLoading] = useState(false);
	const [moviesList, setMoviesList] = useState<MovieItem[]>([]);
	const [sortedMoviesList, setSortedMoviesList] = useState<MovieItem[]>([]);
	const [error, setError] = useState<AxiosError>();

	useEffect(() => {
		setLoading(true)

    axios.get(`${BASE_URL}/movies`)
      .then(response => {
        setMoviesList(response.data);
				setLoading(false);
      })
      .catch((error: AxiosError) => {
        setError(error);
      })
      .finally(() => setLoading(false));
	}, []);

  useEffect(() => {
    const sortedMoviesList = filterMoviesByGenre(moviesList, sortByGenre);
    setSortedMoviesList(sortedMoviesList);
  }, [moviesList, sortByGenre]);

	return { loading, moviesList, sortedMoviesList, error };
};