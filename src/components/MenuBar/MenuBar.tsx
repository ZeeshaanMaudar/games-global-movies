import React, { FC } from 'react';

import { MenuBarProps } from './types';

import { SortByGenreForm } from '../SortByGenreForm';
import { SearchBar } from '../SearchBar';

import { AppBarStyled, ToolbarStyled } from './styles';

export const MenuBar: FC<MenuBarProps> = ({
	uniqueGenres,
	sortByGenre,
	setSortByGenre,
	disabled,
	search,
	handleSearch,
}) => {

  return (
		<AppBarStyled position="sticky" color="inherit">
			<ToolbarStyled>
				<SortByGenreForm
					uniqueGenres={uniqueGenres}
					sortByGenre={sortByGenre}
					setSortByGenre={setSortByGenre}
					disabled={disabled}
				/>
				<SearchBar search={search} handleSearch={handleSearch} />
			</ToolbarStyled>
		</AppBarStyled>
	);
};
