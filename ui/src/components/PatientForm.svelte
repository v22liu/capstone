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
	import { Villages } from '$lib/prescription/prescription';
	import VoiceCapture from '../routes/lookup/VoiceCapture.svelte';
	
	export let patient = {};
	export let currentlyLookup = false;
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
	let updated = false

	function handleInput(event) {
		updated = true
  }

	$: if (name || phone || natID || sex || village || day_of_birth || month_of_birth || year_of_birth) {
		toggle()
		search({
			name, phone, natID, sex, village, day_of_birth, month_of_birth, year_of_birth
		})
	}

</script>

<Form method="POST" action="?/patient" bind:this={personalIdentifier}>
	<input type="hidden" name="id" value={id} />
	<FormGroup>
		<TextInput light labelText="Name" placeholder="" bind:value={name} name="name" on:input={handleInput}/>
	</FormGroup>
	<FormGroup>
		<Select labelText="Sex" light name="sex" bind:selected={sex} on:input={handleInput} on:change={(e) => sex = e.target.value}>
			<SelectItem value="" text="--"/>
			<SelectItem value="Male" text="Male" />
			<SelectItem value="Female" text="Female" />
			<SelectItem value="Other" text="Other" />
		</Select>
	</FormGroup>
	<FormGroup legendText = "Date of Birth">
	<div style="display: flex; flex-direction: row; gap: 8px">
		
		<Select bind:selected={month_of_birth} labelText="Month" light name="month_of_birth" on:input={handleInput} on:change={(e) => month_of_birth = e.target.value}>
			<SelectItem value="" text="--"/>
			<SelectItem value={1} text="Jan" />
			<SelectItem value={2} text="Feb" />
			<SelectItem value={3} text="Mar" />
			<SelectItem value={4} text="Apr" />
			<SelectItem value={5} text="May" />
			<SelectItem value={6} text="Jun" />
			<SelectItem value={7} text="Jul" />
			<SelectItem value={8} text="Aug" />
			<SelectItem value={9} text="Sept" />
			<SelectItem value={10} text="Oct" />
			<SelectItem value={11} text="Nov" />
			<SelectItem value={12} text="Dec" />
		</Select>
		
		<TextInput light labelText="Day" placeholder="" bind:value={day_of_birth} on:input={handleInput} name="day_of_birth" />
		<TextInput light labelText="Year" placeholder="" bind:value={year_of_birth} on:input={handleInput} name="year_of_birth" />
	</div>
	</FormGroup>
	<FormGroup>
		<Select labelText="Village" light name="village" bind:selected={village} on:input={handleInput} on:change={(e) => village = e.target.value}>
			<SelectItem value="" text="--"/>
			{#each Villages as village}
				<SelectItem value={village} text={village} />
			{/each}
		</Select>
	</FormGroup>
	<FormGroup>
		<TextInput
			light
			labelText="Phone Number"
			placeholder="XX-XXX-XXXX"
			bind:value={phone}
			name="phone"
			on:input={handleInput}
		/>
	</FormGroup>
	<FormGroup>
		<TextInput light labelText="National ID" placeholder="XXX-XXX-XXX" name="natID" bind:value={natID} on:input={handleInput}/>
	</FormGroup>
	{#if currentlyLookup==false}
		<VoiceCapture />
	{/if}
	{#if cta == "Create"}
		<div style="display: flex">
			<Button style=" margin-left: auto" type="submit" kind="tertiary" disabled={!updated} on:click={updated=false} href="/patient/{id}">{cta}</Button>
		</div>
	{/if}
	{#if cta !== "Create" && cta !== null}
		<div style="display: flex">
			<Button style=" margin-left: auto" type="submit" kind="tertiary" disabled={!updated} on:click={updated=false} >{cta}</Button>
		</div>
	{/if}
</Form>
