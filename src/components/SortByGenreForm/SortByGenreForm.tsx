import React, { FC } from 'react';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material';

import { SortByGenreFormProps } from './types';

export const SortByGenreForm: FC<SortByGenreFormProps> = ({
	uniqueGenres,
	sortByGenre,
	setSortByGenre,
	disabled
}) => {

	const handleSortByGenre = (event: SelectChangeEvent) => {
    setSortByGenre(event.target.value as string);
  };

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} disabled={disabled}>
			<InputLabel id="genre">Genre</InputLabel>
			<Select
				labelId="sort-select"
				id="sort-select"
				value={sortByGenre}
				label="Genre"
				onChange={handleSortByGenre}
			>
				{uniqueGenres.map((genre) => {
					return <MenuItem key={genre} value={genre}>{genre}</MenuItem>
				})}
			</Select>
		</FormControl>
	);
};
