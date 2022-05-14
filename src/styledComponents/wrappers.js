import { Card, styled, css } from '@mui/material'

export const CardWrapper = styled(Card)(
	({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${theme.palette.background.paper};
		padding: ${theme.spacing(2)};

		> img {
			width: 40%;
		}
	`
)
