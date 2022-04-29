import { createRoot } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './redux/store'

import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)
