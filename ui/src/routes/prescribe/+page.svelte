<script>
	import PatientCard from '../../components/PatientOverview.svelte';
	import PrescribeNotes from '../../components/PrescribeNotes.svelte';
</script>

<div class="container">
	<PatientCard />
	<PrescribeNotes />
</div>

<style>
	.container {
		display: flex;
		flex: 1;
		gap: 32px;
	}
</style>
