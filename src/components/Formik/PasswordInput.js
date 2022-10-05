import { useState } from 'react'
import { IconButton } from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import StringInput from './StringInput'

const PasswordInput = ({ name, placeholder, label, innerLabel, ...rest }) => {
	const [showPassword, setShowPassword] = useState(false)

	const inputType = showPassword ? 'text' : 'password'
	const inputIcon = showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />

	return (
		<StringInput
			type={inputType}
			name={name}
			placeholder={placeholder}
			label={label}
			innerLabel={innerLabel}
			InputProps={{
				endAdornment: (
					<IconButton onClick={() => setShowPassword(prev => !prev)}>
						{inputIcon}
					</IconButton>
				),
			}}
			{...rest}
		/>
	)
}

export default PasswordInput
