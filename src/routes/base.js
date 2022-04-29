import { lazy } from 'react'

import { Loader } from '../components'

const MainPage = Loader(lazy(() => import('../content/MainPage')))

const baseRoutes = [
	{
		path: '/',
		element: <MainPage />,
	},
]

export default baseRoutes
