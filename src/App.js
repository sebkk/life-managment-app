import { CssBaseline } from '@mui/material'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from './theme'
import routes from './routes'

const App = () => {
	const content = useRoutes(routes)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{content}
		</ThemeProvider>
	)
}

export default App
