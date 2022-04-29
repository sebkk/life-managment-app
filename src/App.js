import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import { theme } from './theme'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			Hello world
		</ThemeProvider>
	)
}

export default App
