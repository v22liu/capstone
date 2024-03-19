<script>
	import PersonalIdentifier from './PersonalIdentifier.svelte';
	import VoiceCapture from './VoiceCapture.svelte';
	import PatientCard from '../../components/PatientCard.svelte';
	import { Button, Tag } from 'carbon-components-svelte';
	import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte';
	import ErrorFilled from 'carbon-icons-svelte/lib/ErrorFilled.svelte';
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	import NewPatient from '../../components/NewPatientCard.svelte';
	import { enhance } from '$app/forms';

	export let data;
	export let form;

	let useText = false;
	let useVoice = false;

	let personalIdentifier = {};
	$: records = form?.records ?? data.records;
	$: console.log(form?.success)

	async function submitPatientSearch() {
		const form = document.getElementById('identifier-search');
		if (form) {
			form.submit();
		}
	}
</script>

<svelte:head>
	<title>Lookup</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="container" style="background-color: #F4F4F4; flex: 1">

	<h2 class="title">Search for Patient</h2>
	<h2>Input available info and biomarkers, then press search.</h2>
	<p class="subtitle">
		The database can be searched even if not all fields are filled, input as much information as
		possible.
	</p>
</section>
<section class="capture-container" style="background-color: #F4F4F4;">
	<PersonalIdentifier toggle={() => useText = true} search={(e) => personalIdentifier = e}/>
	<VoiceCapture toggle={() => useVoice = true}/>
</section>
<form action="?/patient" method="POST" use:enhance id="identifier-search">
	<input type="hidden" name="name" value={personalIdentifier.name} />
	<input type="hidden" name="phone" value={personalIdentifier.phone} />
	<input type="hidden" name="natID" value={personalIdentifier.natID} />
	<input type="hidden" name="village" value={personalIdentifier.village} />
	<input type="hidden" name="sex" value={personalIdentifier.sex} />
</form>
<section class="search-container" style="background-color: #F4F4F4;">
	<div
		style="display: flex; align-items: center; gap:2rem; background-color: white; width: fit-content; padding: 0.75rem"
	>
		<div style="display: flex; gap: 1rem; align-items: center;">
			<p style="font-size: 0.9rem">Search With:</p>
			<Tag icon={useText ? CheckmarkFilled : ErrorFilled} type={useText ? "green" : "outline"}>Personal Identifiers</Tag>
			<Tag icon={useVoice ? CheckmarkFilled : ErrorFilled} type={useVoice ? "green" : "outline"}>Speech to Text</Tag>
		</div>
		<Button
			icon={Search}
			on:click={() => {
				const section = document.getElementById('patient-section');

				if (section) section.scrollIntoView({behavior: 'smooth'});

				useText = false;
				useVoice = false;

				submitPatientSearch();
			}}>Search for Patient</Button
		>
	</div>
</section>

<section class="patient-section" id="patient-section" >
	<h1>Possible Patient Matches</h1>
	<div style="display: flex; flex-wrap:wrap; gap:32px;">
		{#each form?.records ?? data.records as patient}
			<PatientCard {patient} />
		{/each}
			<NewPatient/>
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
