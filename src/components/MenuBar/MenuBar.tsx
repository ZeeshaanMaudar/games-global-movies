import React, { FC } from 'react';

import { MenuBarProps } from './types';

import { SortByGenreForm } from '../SortByGenreForm';

import { AppBarStyled, BoxWrapper, ToolbarStyled } from './styles';

export const MenuBar: FC<MenuBarProps> = ({
	uniqueGenres,
	sortByGenre,
	setSortByGenre,
	disabled,
}) => {

  return (
		<AppBarStyled position="sticky" color="inherit">
			<ToolbarStyled>
				<BoxWrapper>
					<SortByGenreForm
						uniqueGenres={uniqueGenres}
						sortByGenre={sortByGenre}
						setSortByGenre={setSortByGenre}
						disabled={disabled}
					/>
				</BoxWrapper>
			</ToolbarStyled>
		</AppBarStyled>
	);
};
