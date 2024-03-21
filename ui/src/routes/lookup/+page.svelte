<script>
	// @ts-nocheck
	import PersonalIdentifier from './PersonalIdentifier.svelte';
	import VoiceCapture from './VoiceCapture.svelte';
	import PatientCard from '../../components/PatientCard.svelte';
	import { Button, Tag } from 'carbon-components-svelte';
	import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte';
	import ErrorFilled from 'carbon-icons-svelte/lib/ErrorFilled.svelte';
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	import NewPatient from '../../components/NewPatientCard.svelte';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	export let data;
	export let form;

	let useText = false;
	let useVoice = false;

	let personalIdentifier = {};
	let voiceData = [];
	$: voiceMatch = [];

	onMount(() => {
		if (form?.success) {
			const section = document.getElementById('patient-section');

			if (section) section.scrollIntoView({ behavior: 'smooth' });
		}
	});

	async function submitPatientSearch() {
		const form = document.getElementById('identifier-search');
		if (form) {
			// form.submit();
			// voiceForm.submit();
		}

		if (voiceData[0]) {
			const formData = new FormData();
			const audioBlob = new Blob(voiceData[0], { type: 'audio/wav' });
			formData.append('file', audioBlob, voiceData[1]);
			const response = await fetch('http://127.0.0.1:8000/speaker-recognition', {
				method: 'POST',
				body: formData,
				cache: 'no-cache',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'POST',
					'Access-Control-Allow-Headers': 'Content-Type'
				}
			});

			const res = await response.json();

			voiceMatch = [...res.matching_patients];
			console.log(voiceMatch);

			const section = document.getElementById('patient-section');

			if (section) section.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>Lookup</title>
	<meta name="description" content="About this app" />
</svelte:head>

<form action="?/patient" method="POST" use:enhance id="identifier-search">
	<input type="hidden" name="name" value={personalIdentifier.name} />
	<input type="hidden" name="phone" value={personalIdentifier.phone} />
	<input type="hidden" name="natID" value={personalIdentifier.natID} />
	<input type="hidden" name="village" value={personalIdentifier.village} />
	<input type="hidden" name="sex" value={personalIdentifier.sex} />
	<input type="hidden" name="day_of_birth" value={personalIdentifier.day_of_birth} />
	<input type="hidden" name="month_of_birth" value={personalIdentifier.month_of_birth} />
	<input type="hidden" name="year_of_birth" value={personalIdentifier.year_of_birth} />
</form>
<!-- <form action="?/voice" method="POST" use:enhance id="voice-search">
	<input type="hidden" name="voiceBlob" value={voiceData[0]} />
	<input type="hidden" name="voiceSrc" value={voiceData[1]} />
	<input type="hidden" name="test" value={[1, 2, 3]} />
</form> -->

<section class="container" style="background-color: #F4F4F4; flex: 1">
	<h2 class="title">Search for Patient</h2>
	<h2>Input available info and biomarkers, then press search.</h2>
	<p class="subtitle">
		The database can be searched even if not all fields are filled, input as much information as
		possible.
	</p>
</section>
<section class="capture-container" style="background-color: #F4F4F4;">
	<PersonalIdentifier toggle={() => (useText = true)} search={(e) => (personalIdentifier = e)} />
	<div style="width:70%">
		<VoiceCapture toggle={() => (useVoice = true)} search={(e) => (voiceData = e)} />
	</div>
</section>
<section class="search-container" style="background-color: #F4F4F4;">
	<div
		style="display: flex; align-items: center; gap:2rem; background-color: white; width: fit-content; padding: 0.75rem"
	>
		<div style="display: flex; gap: 1rem; align-items: center;">
			<p style="font-size: 0.9rem">Search With:</p>
			<Tag icon={useText ? CheckmarkFilled : ErrorFilled} type={useText ? 'green' : 'outline'}
				>Personal Identifiers</Tag
			>
			<Tag icon={useVoice ? CheckmarkFilled : ErrorFilled} type={useVoice ? 'green' : 'outline'}
				>Speech to Text</Tag
			>
		</div>
		<Button
			icon={Search}
			on:click={() => {
				// Submit the search
				console.log('Searching for patient');
				// TODO: Call the API with the audioRecordingData

				// Scroll to the patient section

				useText = false;
				useVoice = false;

				submitPatientSearch();
			}}>Search for Patient</Button
		>
	</div>
</section>

<section class="patient-section" id="patient-section" style="display: flex; flex-direction:column">
	<h1>Possible Patient Matches</h1>
	<div style="display: flex; flex-wrap:wrap; gap:32px;">
		{#each voiceMatch as patient}
			<PatientCard {patient} />
		{/each}
		{#each form?.records ?? data.records as patient}
			<PatientCard {patient} />
		{/each}
		{#if form?.records == null && data.records == null}
			<div style="width:255px display:flex flex-direction:column">
				<p>No Patient Records Found.</p>
				<NewPatient />
			</div>
		{:else}
			<NewPatient />
		{/if}
	</div>
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		background-color: '#f4f4f4';
		padding: 1rem 2rem;
	}
	.title {
		font-weight: bold;
	}
	.subtitle {
		font-size: 1.25rem;
	}
	.capture-container {
		display: flex;
		background-color: '#f4f4f4';
		padding: 1rem 2rem;
		gap: 3rem;
	}
	.search-container {
		display: flex;
		justify-content: flex-end;
		padding: 1rem 2rem;
	}
	.patient-section {
		display: flex;
		flex-wrap: wrap;
		background-color: #f4f4f4;
		margin-top: 2rem;
		padding: 1rem 2rem;
		gap: 8px;
		scroll-margin-top: 55px;
	}
</style>
