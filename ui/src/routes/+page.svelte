<script>
	// @ts-nocheck
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	import Undo from 'carbon-icons-svelte/lib/Undo.svelte';
	import AddAlt from 'carbon-icons-svelte/lib/AddAlt.svelte';
	import Catalog from 'carbon-icons-svelte/lib/Catalog.svelte';
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
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		height: 100%;
		padding: 30rem 10rem;
	}
	h2 {
		font-size: 2.5rem;
		font-weight: bold;
		margin-bottom: 2rem;
	}
	div {
		display: flex;
		gap: 10rem;
	}
	button {
		font-size: 1.5rem;
		border: none;
		height: 15rem;
		width: 15rem;
	}
	p {
		font-size: 1.25rem;
		font-weight: bold;
	}
</style>
