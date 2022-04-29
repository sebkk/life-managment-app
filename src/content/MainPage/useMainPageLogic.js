import { useNavigate } from 'react-router-dom'

export default function useMainPageLogic() {
	const navigate = useNavigate()

	const onClickNavigate = path => navigate(`/${path}`)

	return {
		onClickNavigate,
	}
}
