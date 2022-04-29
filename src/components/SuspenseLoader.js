import { useEffect } from 'react'
import { CircularProgress, styled, css } from '@mui/material'
import nprogress from 'nprogress'

const LoaderContainer = styled('div')(css`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
`)

const SuspenseLoader = () => {
	useEffect(() => {
		nprogress.configure({ showSpinner: false }).start()

		return () => {
			nprogress.configure({ showSpinner: false }).done()
		}
	}, [])

	return (
		<LoaderContainer>
			<CircularProgress size={64} disableShrink thickness={3} color='primary' />
		</LoaderContainer>
	)
}

export default SuspenseLoader
