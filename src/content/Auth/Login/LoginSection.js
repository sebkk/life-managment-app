import { Formik, Form } from 'formik'
import { Grid, Typography, styled, css, Button } from '@mui/material'

import { StringInput, PasswordInput } from 'src/components'
import { useNavigation } from 'src/hooks'

import useLoginLogic from './useLoginLogic'

const GridContainer = styled(Grid)(
	({ theme }) => css`
		padding: ${theme.spacing(2, 1)};

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			padding: ${theme.spacing(2)};
		}
	`
)

const ButtonWrapper = styled(Grid)(
	({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		> button {
			width: 100%;
		}

		> button:first-of-type {
			margin-bottom: ${theme.spacing(1)};
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			flex-direction: row;

			> button {
				width: 150px;
			}

			> button:first-of-type {
				margin-bottom: ${theme.spacing(0)};
				margin-right: ${theme.spacing(1)};
			}

			> button:last-of-type {
				margin-left: ${theme.spacing(1)};
			}
		}
	`
)

const LoginSection = () => {
	const { initialValues, validationSchema, onSubmit } = useLoginLogic()

	const { onClickNavigate } = useNavigation()

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
						<GridContainer container spacing={1}>
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
							<ButtonWrapper item xs={12}>
								<Button type='submit' variant='outlined'>
									Log in
								</Button>
								<Button
									onClick={() => onClickNavigate('register')}
									color='secondary'
									variant='outlined'
								>
									Register
								</Button>
							</ButtonWrapper>
						</GridContainer>
					</Form>
				</Formik>
			</Grid>
		</GridContainer>
	)
}

export default LoginSection
