import React, { FC } from 'react';

import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { SearchBarProps } from './types';

export const SearchBar: FC<SearchBarProps> = ({ search, handleSearch }) => {

  return (
    <Box>
      <TextField
        label="Search Title"
        size="small"
        id="outlined-end-adornment"
        sx={{ mr: 1, width: 200 }}
        value={search}
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </Box>
  )
};
