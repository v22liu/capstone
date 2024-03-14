<script>
	import PatientCard from '../../../components/PatientOverview.svelte';
	import PrescribeNotes from '../../../components/PrescribeNotes.svelte';

	export let data;
</script>

<div class="container">
	<PatientCard patient={data.record} />
	<PrescribeNotes overview={data.overview}/>
</div>

<style>
	.container {
		display: flex;
		flex: 1;
		gap: 32px;
	}
</style>
