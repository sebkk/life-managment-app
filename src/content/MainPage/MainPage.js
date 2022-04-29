import { Card, styled, css } from '@mui/material'

import heroPicture from '../../pictures/mainpage_hero_picture.png'
import HeroBottomContainer from './HeroBottomContainer'

const HeroContainer = styled('main')(
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

const ContentWrapper = styled(Card)(
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

const MainPage = () => {
	return (
		<HeroContainer>
			<ContentWrapper>
				<img src={heroPicture} alt='main page hero' />
				<HeroBottomContainer />
			</ContentWrapper>
		</HeroContainer>
	)
}

export default MainPage
