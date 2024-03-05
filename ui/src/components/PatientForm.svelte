<script>
	import {
		TextInput,
		Select,
		SelectItem,
		Form,
		FormGroup,
		DatePicker,
		DatePickerInput
	} from 'carbon-components-svelte';
</script>

<Form>
	<FormGroup>
		<TextInput light labelText="Name" placeholder="John Doe" />
	</FormGroup>
	<FormGroup>
		<Select labelText="Sex" light>
			<SelectItem value="male" text="Male" />
			<SelectItem value="female" text="Female" />
			<SelectItem value="other" text="Other" />
		</Select>
	</FormGroup>
	<FormGroup>
		<DatePicker light datePickerType="single">
			<DatePickerInput labelText="Date of Birth" placeholder="mm/dd/yyyy"/>
		</DatePicker>
	</FormGroup>
	<FormGroup>
		<Select labelText="Village" light>
			<SelectItem value="Dar es Salaam" text="Dar es Salaam" />
			<SelectItem value="Dodoma" text="Dodoma" />
			<SelectItem value="Nansio" text="Nansio" />
		</Select>
	</FormGroup>
	<FormGroup>
		<TextInput light labelText="Phone Number" placeholder="123-456-7890"/>
	</FormGroup>
</Form>