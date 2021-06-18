import { yupResolver } from '@hookform/resolvers'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Form } from './Components/Form'
import { Input } from './Components/Input'
import { MainContainer } from './Components/MainContainer'
import { PrimaryButton } from './Components/PrimaryButton'

const schema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'В поле имя не должно быть цифр')
		.required('Поле имя необходимое для заполнения'),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'В поле фамилия не должно быть цифр')
		.required('Поле фамилия необходимое для заполнения')
})

export const Step1 = () => {
	const { register, handleSubmit, errors } = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	const onSubmit = data => console.log(data)

	return (
		<MainContainer>
			<Typography component="h2" variant="h5">
				Step 1
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					ref={register}
					id="firstName"
					type="text"
					label="First Name"
					name="firstName"
					error={!!errors.firstName}
					helperText={errors?.firstName?.message}
				/>
				<Input
					ref={register}
					id="lastName"
					type="text"
					label="Last Name"
					name="lastName"
					error={!!errors.lastName}
					helperText={errors?.lastName?.message}
				/>
				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	)
}
