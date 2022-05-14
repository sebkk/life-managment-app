import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#62929E',
			light: '#86adb7',
			dark: '#456871',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#574b60',
			light: '#7a7081',
			dark: '#3b3241',
			contrastText: '#ffffff',
		},
		background: {
			default: '#fbfbfb',
			paper: '#edf3f3',
		},
		text: {
			primary: 'rgba(0,0,0,0.86)',
			secondary: 'rgba(0,0,0,0.53)',
			disabled: 'rgba(37,36,36,0.23)',
			hint: 'rgba(0,0,0,0.39)',
		},
		error: {
			main: '#dc3326',
			light: 'rgba(227,91,81,0.91)',
			dark: '#901f17',
			contrastText: '#ffffff',
		},
		warning: {
			main: '#ec9309',
			light: 'rgba(241,162,49,0.94)',
			dark: '#9e6408',
			contrastText: 'rgba(0,0,0,0.87)',
		},
		info: {
			main: '#2191f3',
			light: '#51a6f1',
			dark: '#196cb9',
			contrastText: '#ffffff',
		},
		success: {
			main: '#45ad49',
			light: '#6fc372',
			dark: '#2b732e',
			contrastText: 'rgba(0,0,0,0.88)',
		},
		divider: 'rgba(0,0,0,0.13)',
	},
	typography: {
		fontFamily: 'Montserrat',
		fontSize: 15,
		fontWeightBold: 800,
		button: {
			fontFamily: 'Montserrat',
		},
	},
	spacing: 8,
	props: {
		MuiTooltip: {
			arrow: true,
		},
	},
	overrides: {
		MuiAppBar: {
			colorInherit: {
				backgroundColor: '#689f38',
				color: '#fff',
			},
		},
	},
	shape: {
		borderRadius: 8,
	},
})
