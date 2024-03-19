<script>
// @ts-nocheck

	import {
		TextInput,
		Select,
		SelectItem,
		Form,
		FormGroup,
		Button
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import { Villages } from '$lib/prescription/prescription';

	export let patient = {};

	export let cta = null;
	export let toggle = () => {};
	export let search = () => {};

	let id, name, sex, day_of_birth, month_of_birth, year_of_birth, village, phone, natID;

	id = patient.id;
	name = patient.name
	sex = patient.sex
	day_of_birth = patient.day_of_birth
	month_of_birth = patient.month_of_birth
	year_of_birth = patient.year_of_birth
	village = patient.village
	phone = patient.phone
	natID = patient.natID

	let personalIdentifier = {}

	$: if (name || phone || natID || sex || village) {
		toggle()
		search({
			name, phone, natID, sex, village
		})
	}

</script>

<Form method="POST" action="?/patient" bind:this={personalIdentifier}>
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
		<Select labelText="Month" light name="month_of_birth" bind:selected={month_of_birth}>
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
		<TextInput light labelText="Day" placeholder="01" bind:value={day_of_birth} name="day_of_birth" />
		<TextInput light labelText="Year" placeholder="1990" bind:value={year_of_birth} name="year_of_birth" />
	</div>
	</FormGroup>
	<FormGroup>
		<Select labelText="Village" light name="village" bind:selected={village}>
			{#each Villages as village}
				<SelectItem value={village} text={village} />
			{/each}
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
