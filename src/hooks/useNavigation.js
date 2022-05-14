import { useNavigate } from 'react-router-dom'

export const useNavigation = () => {
	const navigate = useNavigate()

	const onClickNavigate = path => navigate(`/${path}`)

	return {
		onClickNavigate,
	}
}
