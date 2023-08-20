import { Dispatch, SetStateAction, ChangeEventHandler } from 'react';

export interface MenuBarProps {
	uniqueGenres: string[];
	sortByGenre: string;
	setSortByGenre: Dispatch<SetStateAction<string>>;
	disabled: boolean;
	search: string;
	handleSearch: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
