<script>
	import PatientForm from './PatientForm.svelte';
	import { Button } from 'carbon-components-svelte';
	import Camera from 'carbon-icons-svelte/lib/Camera.svelte';
	import BlankProfile from '$lib/images/blank-profile.png';
	
	import profilePic from '$lib/images/profile_photo.png';
	import Jancinta from '$lib/images/profile/1-jacinta-siago.png';
	import Abdul from '$lib/images/profile/2-abdulkarim-ali.png';
	import Medina from '$lib/images/profile/3-medina-maraka.png';
	import Juma from '$lib/images/profile/4-juma-ibrahim.png';
	import Minsu from '$lib/images/profile/5-minsu-hassan.png';
	import Kavuwa from '$lib/images/profile/6-kavuwa-musyoka.png';
	import Michael from '$lib/images/profile/7-sayimichael-kabelele.png';
	import Patricia from '$lib/images/profile/8-patricia-geni.png'

	/**
	 * @type {any}
	 */
	export let patient = {};

	let { name, sex, day_of_birth, month_of_birth, year_of_birth, village, phone, id, natID, photo_file_path } = patient;
	
	/**
	 * @type {string | null}
	 */
	export let cta = null;
	export let takePhoto = false;

	const pathToPic = {
		'1-jancinta-siago.png': Jancinta,
		'2-adbulkarim-ali.png': Abdul,
		'3-medina-maraka.png': Medina,
		'4-juma-ibrahim.png': Juma,
		'5-minsu-hassan.png': Minsu,
		'6-kavuwa-musyoka.png': Kavuwa,
		'7-sayimichael-kabelele.png': Michael,
		'8-patricia-geni.png': Patricia,
	}
</script>

<div>
	<h4>Patient Identifiers</h4>
	<img
		src={pathToPic[photo_file_path] ?? profilePic}
		alt="Default profile picture"
		style="height: 10rem; width: 10rem; margin: 1rem auto 0;"
		aria-hidden="true"
	/>
	{#if takePhoto}
		<a href="/photo" style="width: 170px; margin: 1rem auto">
			<Button kind="tertiary" icon={Camera}>Update Photo</Button>
		</a>
	{/if}
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
