import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useData } from './DataContext'
import { MainContainer } from './Components/MainContainer'
import { FileInput } from './Components/FileInput'
import { PrimaryButton } from './Components/PrimaryButton'
import Typography from '@material-ui/core/Typography'
import { Form } from './Components/Form'

export const Step3 = () => {
	const history = useHistory()
	const { control, handleSubmit } = useForm()

	const onSubmit = data => {
		history.push('/result')
	}

	return (
		<MainContainer>
			<Typography component="h2" variant="h5">
				Step 3
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FileInput name="files" control={control} />
				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	)
}
