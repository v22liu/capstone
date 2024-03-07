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
		id: null,
		name: 'John Doe',
		sex: 'Male',
		dob: '01-01-2024',
		village: 'Dar es Salaam',
		phone: '123-456-7890'
	};

	let name = patient.name;
	let sex = patient.sex;
	let dob = patient.dob;
	let village = patient.village;
	let phone = patient.phone;
</script>

<Form method="POST" action="?/createPatient">
	<input type="hidden" name="id" value={patient.id} />
	<FormGroup>
		<TextInput light labelText="Name" placeholder={name} bind:value={name} name="name" />
	</FormGroup>
	<FormGroup>
		<Select labelText="Sex" light name="sex" bind:selected={sex}>
			<SelectItem value="male" text="Male" />
			<SelectItem value="female" text="Female" />
			<SelectItem value="other" text="Other" />
		</Select>
	</FormGroup>
	<FormGroup>
		<DatePicker light datePickerType="single">
			<DatePickerInput labelText="Date of Birth" placeholder={dob} name="dob" bind:value={dob} />
		</DatePicker>
	</FormGroup>
	<FormGroup>
		<Select labelText="Village" light name="village" bind:selected={village}>
			<SelectItem value="Dar es Salaam" text="Dar es Salaam" />
			<SelectItem value="Dodoma" text="Dodoma" />
			<SelectItem value="Nansio" text="Nansio" />
		</Select>
	</FormGroup>
	<FormGroup>
		<TextInput light labelText="Phone Number" placeholder={phone} name="phone" />
	</FormGroup>
	<div style="display: flex">
		<Button icon={Add} style="width: 60%; margin-left: auto" type="submit">Save Changes</Button>
	</div>
</Form>
