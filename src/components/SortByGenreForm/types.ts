import { Dispatch, SetStateAction } from "react";

export interface SortByGenreFormProps {
	uniqueGenres: string[];
	sortByGenre: string;
	setSortByGenre: Dispatch<SetStateAction<string>>;
	disabled: boolean;
}
