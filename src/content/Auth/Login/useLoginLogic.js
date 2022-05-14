import * as yup from 'yup'

import { ERRORS } from 'src/constants/errors'

const initialValues = {
	email: '',
	password: '',
}

export default function useLoginLogic() {
	const validationSchema = yup.object({
		email: yup.string().required(ERRORS.required).email(ERRORS.email),
		password: yup.string().required(ERRORS.required),
	})

	const onSubmit = values => {
		console.log(values)
	}

	return { validationSchema, initialValues, onSubmit }
}
