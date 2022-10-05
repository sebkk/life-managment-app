import { styled, css } from '@mui/material'

import { PageContainer } from 'src/styledComponents/containers'
import { CardWrapper } from 'src/styledComponents/wrappers'

import LoginSection from './LoginSection'

const ContentWrapper = styled(CardWrapper)(
	({ theme }) => css`
		flex-direction: column;
	`
)

const Login = () => {
	return (
		<PageContainer>
			<ContentWrapper>
				<LoginSection />
			</ContentWrapper>
		</PageContainer>
	)
}

export default Login
