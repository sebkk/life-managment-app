import { styled, css } from '@mui/material'

export const PageContainer = styled('main')(
	({ theme }) => css`
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${theme.palette.background.paper};
		padding: ${theme.spacing(3, 10)};
	`
)
