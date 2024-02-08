<script>
	import PatientForm from '../../../components/PatientForm.svelte';
	import { Button } from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import Camera from 'carbon-icons-svelte/lib/Camera.svelte';
	import BlankProfile from '$lib/images/blank-profile.png';
</script>

<div>
	<h4>Patient Identifiers</h4>
	<img
		src={BlankProfile}
		alt="Default profile picture"
		style="height: 10rem; width: 10rem; margin: 1rem auto 0;"
		aria-hidden="true"
	/>
	<Button kind="tertiary" style="width: 170px; margin: 1rem auto" icon={Camera}>Update Photo</Button
	>
	<PatientForm />
	<Button icon={Add} style="width: 60%; margin-left: auto" disabled>Save Changes</Button>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		background-color: #f4f4f4;
		padding: 1rem;
	}
	h4 {
		font-weight: bold;
	}
</style>
