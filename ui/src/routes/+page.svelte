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
		<a href= /lookup>
			<Search size={100}/> <p>Patient Lookup</p>
		</a>
		<a href= /create>
			<AddAlt size={100} />
			<p>New Patient</p>
		</a>
		<a href= /catalogue>
			<Catalog size={100} />
			<p>Drug Inventory</p>
		</a>
	</div>
	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		height: 80vh;
		width: 50vw;
		margin: 0 auto;
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
	a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: black;
		background-color: #f4f4f4;
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
