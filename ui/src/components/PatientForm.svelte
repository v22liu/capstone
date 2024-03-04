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
	import { currentRecord } from '../stores';
	import { db } from '$lib/db';

	async function createEntry() {
		const form = document.querySelector('form');

		if (!form) {
			return;
		}

		const formData = new FormData(form);
		const data = Object.fromEntries(formData);
		console.log(data.dob.toString());

		await db.patientData.add({
			id: Date.now().toString(),
			name: data.name.toString(),
			sex: data.sex.toString(),
			village: data.village.toString(),
			phone: data.phoneNumber.toString(),
			dob: data.dob.toString(),
		});
	}
</script>

<Form>
	<FormGroup>
		<TextInput light labelText="Name" placeholder="John Doe" name="name" />
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
			<DatePickerInput labelText="Date of Birth" placeholder="mm/dd/yyyy" name="dob" />
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
		<TextInput light labelText="Phone Number" placeholder="123-456-7890" name="phone" />
	</FormGroup>
	<div style="display: flex">
		<Button icon={Add} style="width: 60%; margin-left: auto" on:click={createEntry}>
			Save Changes
		</Button>
	</div>
</Form>
