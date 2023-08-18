import { flatMap, uniq } from 'lodash';

import { MovieItem } from '../../api/movies/types';

export const getUniqueGenres = (movies: MovieItem[]): string[] => {

  const allCategory = 'All';
  const allGenres = flatMap(movies, 'genre');

  const uniqueGenresArray: string[] = uniq(allGenres);

  return [allCategory, ...uniqueGenresArray];
}
