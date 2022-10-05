import { useField } from 'formik'
import { TextField, Typography, styled, css } from '@mui/material'

const ErrorField = styled('div')(
	({ theme }) => css`
		height: 25px;
		margin: ${theme.spacing(0.5, 0, 0.5)};
		padding-left: ${theme.spacing(0.5)};
		color: ${theme.palette.error.main};
	`
)

const StringInput = ({
	name,
	placeholder,
	label,
	innerLabel = false,
	...rest
}) => {
	const [field, meta] = useField(name)

	return (
		<>
			{!innerLabel && <Typography>{label}</Typography>}
			<TextField
				onChange={field.onChange}
				label={innerLabel && label}
				onBlur={field.onBlur}
				variant='outlined'
				name={name}
				value={field.value}
				placeholder={placeholder}
				{...rest}
			/>
			<ErrorField>
				{Boolean(meta.touched && meta.error) && (
					<Typography variant='subtitle2'>{meta.error}</Typography>
				)}
			</ErrorField>
		</>
	)
}

export default StringInput
