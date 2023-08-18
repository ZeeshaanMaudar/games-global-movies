import { Dispatch, SetStateAction } from 'react';

export interface MenuBarProps {
	uniqueGenres: string[];
	sortByGenre: string;
	setSortByGenre: Dispatch<SetStateAction<string>>;
	disabled: boolean;
}
