<script>
	import PersonalIdentifier from './PersonalIdentifier.svelte';
	import VoiceCapture from './VoiceCapture.svelte';
	import VideoCapture from './VideoCapture.svelte';
	import { Button, Tag } from 'carbon-components-svelte';
	import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte';
	import ErrorFilled from 'carbon-icons-svelte/lib/ErrorFilled.svelte';
	import Search from 'carbon-icons-svelte/lib/Search.svelte';

	export let data;
</script>

<svelte:head>
	<title>Lookup</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="container" style="background-color: #F4F4F4;">
	<h2 class="title">Search for Patient</h2>
	<h2>Input available info and biomarkers, then press search.</h2>
	<p class="subtitle">
		The database can be searched even if not all fields are filled, input as much information as
		possible.
	</p>
</section>
<section class="capture-container" style="background-color: #F4F4F4;">
	<PersonalIdentifier />
	<VoiceCapture />
	<VideoCapture />
</section>
<section class="search-container" style="background-color: #F4F4F4;">
	<div
		style="display: flex; align-items: center; gap: 3rem; background-color: white; width: fit-content; padding: 0.75rem"
	>
		<div style="display: flex; gap: 1rem; align-items: center;">
			<p style="font-size: 0.9rem">Search With:</p>
			<Tag icon={ErrorFilled} type="outline">Personal Identifiers</Tag>
			<Tag icon={CheckmarkFilled} type="outline">Speech to Text</Tag>
			<Tag icon={CheckmarkFilled} type="outline">Photo Recognition</Tag>
		</div>
		<Button icon={Search}>Search for Patient</Button>
	</div>
</section>
<section>
	{#each data.records as { id, name, sex, village, phone, dob }}
		<p>id: {id}</p>
		<p>{name}</p>
		<p>{sex}</p>
		<p>{village}</p>
		<p>{phone}</p>
		<p>{dob}</p>
	{/each}
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
		background-color: '#f4f4f4';
		justify-content: flex-end;
		padding: 1rem 2rem;
	}
</style>
