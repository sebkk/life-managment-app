import { PageContainer } from 'src/styledComponents/containers'
import { CardWrapper } from 'src/styledComponents/wrappers'
import heroPicture from 'src/pictures/mainpage_hero_picture.png'

import HeroBottomContainer from './HeroBottomContainer'

const MainPage = () => {
	return (
		<PageContainer>
			<CardWrapper>
				<img src={heroPicture} alt='main page hero' />
				<HeroBottomContainer />
			</CardWrapper>
		</PageContainer>
	)
}

export default MainPage
