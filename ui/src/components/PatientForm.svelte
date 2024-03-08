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

	/**
	 * @type {string | null}
	 */
	export let cta = null;

	let name = patient.name;
	let sex = patient.sex;
	let dob = patient.dob;
	let village = patient.village;
	let phone = patient.phone;
</script>

<Form method="POST" action="?/createPatient">
	<input type="hidden" name="id" value={patient.id} />
	<FormGroup>
		<TextInput light labelText="Name" placeholder="John Doe" bind:value={name} name="name" />
	</FormGroup>
	<FormGroup>
		<Select labelText="Sex" light name="sex" bind:selected={sex}>
			<SelectItem value="Male" text="Male" />
			<SelectItem value="Female" text="Female" />
			<SelectItem value="Other" text="Other" />
		</Select>
	</FormGroup>
	<FormGroup>
		<DatePicker light datePickerType="single">
			<DatePickerInput
				labelText="Date of Birth"
				placeholder="mm/dd/yyyy"
				name="dob"
				bind:value={dob}
			/>
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
		<TextInput light labelText="Phone Number" placeholder="123-456-7890" name="phone" />
	</FormGroup>
	{#if cta !== null}
		<div style="display: flex">
			<Button icon={Add} style="width: 60%; margin-left: auto" type="submit">{cta}</Button>
		</div>
	{/if}
</Form>
