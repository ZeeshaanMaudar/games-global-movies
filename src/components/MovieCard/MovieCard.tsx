import React, { FC } from 'react';
import { Card, Divider, CardContent, Typography } from '@mui/material';

import { MovieCardProps } from './types';
import { CategoryWrapper, SubTitle } from './styles';

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">{movie.title}</Typography>
        <Divider />
        <CategoryWrapper>
          <SubTitle variant="body2">Year:</SubTitle>
          <Typography variant="body2">{movie.year}</Typography>
        </CategoryWrapper>
        <CategoryWrapper>
          <SubTitle variant="body2">Genre:</SubTitle>
          <Typography variant="body2">{movie.genre.join(', ')}</Typography>
        </CategoryWrapper>
        <CategoryWrapper>
          <SubTitle variant="body2">Director:</SubTitle>
          <Typography variant="body2">{movie.director}</Typography>
        </CategoryWrapper>
        <CategoryWrapper>
          <SubTitle variant="body2">Actors:</SubTitle>
          <Typography variant="body2">{movie.actors.join(', ')}</Typography>
        </CategoryWrapper>
        <CategoryWrapper>
          <SubTitle variant="body2">Rating:</SubTitle>
          <Typography variant="body2">{movie.rating}</Typography>
        </CategoryWrapper>
      </CardContent>
    </Card>
  )
};
