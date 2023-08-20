import { MovieItem } from "../../api/movies/types";

export const searchMoviesByTitle = (movies: MovieItem[], searchTitle: string): MovieItem[] => {
  const searchTerm = searchTitle.toLowerCase();
  return movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
}
