<script>
	import {
		TextInput,
		Select,
		SelectItem,
		Form,
		FormGroup,
		DatePicker,
		DatePickerInput,
		Button
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';

	export let patient = {
		name: null,
		dob: null,
		sex: null,
		village: null,
		phone: null
	};
</script>

<Form method="POST" action="?/createPatient">
	<FormGroup>
		<TextInput light labelText="Name" placeholder={patient.name ?? 'John Doe'} name="name" />
	</FormGroup>
	<FormGroup>
		<Select labelText="Sex" light name="sex">
			<SelectItem value="male" text="Male" />
			<SelectItem value="female" text="Female" />
			<SelectItem value="other" text="Other" />
		</Select>
	</FormGroup>
	<FormGroup>
		<DatePicker light datePickerType="single">
			<DatePickerInput
				labelText="Date of Birth"
				placeholder={patient.dob ?? 'mm/dd/yyyy'}
				name="dob"
			/>
		</DatePicker>
	</FormGroup>
	<FormGroup>
		<Select labelText="Village" light name="village">
			<SelectItem value="Dar es Salaam" text="Dar es Salaam" />
			<SelectItem value="Dodoma" text="Dodoma" />
			<SelectItem value="Nansio" text="Nansio" />
		</Select>
	</FormGroup>
	<FormGroup>
		<TextInput
			light
			labelText="Phone Number"
			placeholder={patient.phone ?? '123-456-7890'}
			name="phone"
		/>
	</FormGroup>
	<div style="display: flex">
		<Button icon={Add} style="width: 60%; margin-left: auto" type="submit">Save Changes</Button>
	</div>
</Form>
