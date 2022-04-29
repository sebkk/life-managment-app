import { Typography, Button, styled, css } from '@mui/material'

import useLogic from './useMainPageLogic'

const WelcomeMessageWrapper = styled('section')(css`
	text-align: center;
`)

const ButtonsWrapper = styled('nav')(
	({ theme }) => css`
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: ${theme.spacing(3, 0)};

		> button:first-of-type {
			margin-right: ${theme.spacing(2)};
		}
	`
)

const HeroBottomContainer = () => {
	const { onClickNavigate } = useLogic()

	return (
		<WelcomeMessageWrapper>
			<Typography variant='h2'>Welcome on our site</Typography>
			<Typography variant='h5'>Managment your life in one place!</Typography>
			<ButtonsWrapper>
				<Button
					onClick={() => onClickNavigate('login')}
					color='inherit'
					size='large'
					variant='outlined'
				>
					Log in
				</Button>
				<Button
					onClick={() => onClickNavigate('register')}
					color='inherit'
					size='large'
					variant='outlined'
				>
					Register
				</Button>
			</ButtonsWrapper>
		</WelcomeMessageWrapper>
	)
}

export default HeroBottomContainer
