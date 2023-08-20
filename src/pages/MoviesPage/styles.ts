import { styled, Box, Container, Typography } from '@mui/material';


export const Wrapper = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 24px;
`;

export const SpinnerContainer = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;
`;
