import { Formik, Form } from 'formik'
import { Grid, Typography, styled, css } from '@mui/material'

import { StringInput, PasswordInput } from 'src/components'

import useLoginLogic from './useLoginLogic'

const GridContainer = styled(Grid)(
	({ theme }) => css`
		padding: ${theme.spacing(2)};
	`
)

const LoginSection = () => {
	const { initialValues, validationSchema, onSubmit } = useLoginLogic()

	return (
		<GridContainer container spacing={3}>
			<Grid item xs={12}>
				<Typography variant='h3'>Sign in</Typography>
			</Grid>
			<Grid item xs={12}>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					<Form>
						<GridContainer container spacing={3}>
							<Grid item xs={12}>
								<StringInput
									name='email'
									type='email'
									innerLabel
									label='E-mail address'
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<PasswordInput
									name='password'
									label='Password'
									innerLabel
									fullWidth
								/>
							</Grid>
						</GridContainer>
					</Form>
				</Formik>
			</Grid>
		</GridContainer>
	)
}

export default LoginSection
