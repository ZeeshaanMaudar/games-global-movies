import { MovieItem } from "../../api/movies/types";

export const filterMoviesByGenre = (movies: MovieItem[], genre: string): MovieItem[] => {
  if(genre === 'All' || !genre) return movies;
  return movies.filter((movie: MovieItem) => movie.genre.includes(genre));
}
