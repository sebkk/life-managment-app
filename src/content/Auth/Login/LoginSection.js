import { Grid, Typography, styled, css } from '@mui/material'

const GridContainer = styled(Grid)(
	({ theme }) => css`
		padding: ${theme.spacing(2)};
	`
)

const LoginSection = () => {
	return (
		<GridContainer container spacing={3}>
			<Grid item>
				<Typography variant='h3'>Sign in</Typography>
			</Grid>
		</GridContainer>
	)
}

export default LoginSection
