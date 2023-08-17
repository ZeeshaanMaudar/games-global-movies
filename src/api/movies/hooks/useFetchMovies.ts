import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

import { MovieItem } from '../types';
import { BASE_URL } from '../../constants';

export const useFetchMovies = () => {
	const [loading, setLoading] = useState(false);
	const [moviesList, setMoviesList] = useState<MovieItem[]>([]);
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
	}, [])

	return { loading, moviesList, error };
};