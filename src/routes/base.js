import { lazy } from 'react'

import { Loader } from '../components'

const MainPage = Loader(lazy(() => import('../content/MainPage')))
const Login = Loader(lazy(() => import('src/content/Auth/Login')))

const baseRoutes = [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: 'login',
		element: <Login />,
	},
]

export default baseRoutes
