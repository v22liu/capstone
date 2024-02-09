<script>
	// @ts-nocheck
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	import Undo from 'carbon-icons-svelte/lib/Undo.svelte';
	import AddAlt from 'carbon-icons-svelte/lib/AddAlt.svelte';
	import Catalog from 'carbon-icons-svelte/lib/Catalog.svelte';
	import PatientCard from './PatientCard.svelte';
	import PatientForm from './PatientForm.svelte';
	import NewPatientCard from './NewPatientCard.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h2>Welcome to Mission Trip 2024!</h2>
	<div>
		<button>
			<Search size={100} />
			<p>Patient Lookup</p>
		</button>
		<button>
			<Undo size={100} />
			<p>Last Patient</p></button
		>
		<button>
			<AddAlt size={100} />
			<p>New Patient</p></button
		>
		<button>
			<Catalog size={100} />
			<p>Drug Catalogue</p></button
		>
	</div>
	<PatientCard />
	<NewPatientCard />
	<PatientForm />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		height: 90vh;
		width: 100vw;
		padding: 0 10vw;
	}
	h2 {
		font-size: 2.5rem;
		font-weight: bold;
		margin-bottom: 2rem;
	}
	div {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	button {
		font-size: 1.5rem;
		border: none;
		height: 12rem;
		width: 12rem;
	}
	p {
		font-size: 1.25rem;
		font-weight: bold;
	}
</style>
