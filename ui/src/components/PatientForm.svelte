<script>
	import {
		TextInput,
		Select,
		SelectItem,
		Form,
		FormGroup,
		Button
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';

	export let patient = {};

	/**
	 * @type {string | null}
	 */
	export let cta = null;

	let { id, name, sex, dobD, dobM, dobY, village, phone, natID } = patient;
</script>

<Form method="POST" action="?/createPatient">
	<input type="hidden" name="id" value={id} />
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
	<FormGroup legendText = "Date of Birth">
	<div style="display: flex; flex-direction: row; gap: 8px">
		<Select labelText="Month" light name="month_of_birth" bind:selected={dobM}>
			<SelectItem value=1 text="Jan" />
			<SelectItem value=2 text="Feb" />
			<SelectItem value=3 text="Mar" />
			<SelectItem value=4 text="Apr" />
			<SelectItem value=5 text="May" />
			<SelectItem value=6 text="Jun" />
			<SelectItem value=7 text="Jul" />
			<SelectItem value=8 text="Aug" />
			<SelectItem value=9 text="Sept" />
			<SelectItem value=10 text="Oct" />
			<SelectItem value=11 text="Nov" />
			<SelectItem value=12 text="Dec" />
		</Select>
		<TextInput light labelText="Day" placeholder="01" bind:value={dobD} name="day_of_birth" />
		<TextInput light labelText="Year" placeholder="1990" bind:value={dobY} name="year_of_birth" />
	</div>
	</FormGroup>
	<FormGroup>
		<Select labelText="Village" light name="village" bind:selected={village}>
			<SelectItem value="Dar es Salaam" text="Dar es Salaam" />
			<SelectItem value="Dodoma" text="Dodoma" />
			<SelectItem value="Nansio" text="Nansio" />
		</Select>
	</FormGroup>
	<FormGroup>
		<TextInput
			light
			labelText="Phone Number"
			placeholder="123-456-7890"
			bind:value={phone}
			name="phone"
		/>
	</FormGroup>
	<FormGroup>
		<TextInput light labelText="National ID" placeholder="1234567" name="natID" bind:value={natID} />
	</FormGroup>
	{#if cta !== null}
		<div style="display: flex">
			<Button icon={Add} style="width: 60%; margin-left: auto" type="submit">{cta}</Button>
		</div>
	{/if}
</Form>
