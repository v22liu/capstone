<script>
	import PatientForm from './PatientForm.svelte';
	import { Button } from 'carbon-components-svelte';
	import Camera from 'carbon-icons-svelte/lib/Camera.svelte';
	import BlankProfile from '$lib/images/blank-profile.png';

	/**
	 * @type {any}
	 */
	export let patient = {};

	/**
	 * @type {string | null}
	 */
	export let cta = null;
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
	<PatientForm {patient} {cta} />
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
