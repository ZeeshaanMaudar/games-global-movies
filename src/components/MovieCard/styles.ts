import { styled, Box, Card, Typography } from '@mui/material';

export const CardWrapper = styled(Card)`
	margin-bottom: 24px;
  width: 100%;

  @media screen and (min-width: 550px) {
    width: calc((100% - 24px) / 2);
  }
`;

export const CategoryWrapper = styled(Box)`
  display: flex;
`;

export const SubTitle = styled(Typography)`
	font-weight: bold;
  padding-right: 5px;
`;
