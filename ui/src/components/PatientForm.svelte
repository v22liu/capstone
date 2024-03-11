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
		<Select labelText="Month" light name="date of birth Month" bind:selected={dobM}>
			<SelectItem value="Jan" text="Jan" />
			<SelectItem value="Feb" text="Feb" />
			<SelectItem value="Mar" text="Mar" />
			<SelectItem value="Apr" text="Apr" />
			<SelectItem value="May" text="May" />
			<SelectItem value="Jun" text="Jun" />
			<SelectItem value="Jul" text="Jul" />
			<SelectItem value="Aug" text="Aug" />
			<SelectItem value="Sept" text="Sept" />
			<SelectItem value="Oct" text="Oct" />
			<SelectItem value="Nov" text="Nov" />
			<SelectItem value="Dec" text="Dec" />
		</Select>
		<TextInput light labelText="Day" placeholder="01" bind:value={dobD} name="date of birth day" />
		<TextInput light labelText="Year" placeholder="1990" bind:value={dobY} name="date of birth year" />
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
