<script>
	import PatientCard from '../../../components/PatientOverview.svelte';
	import PrescribeNotes from '../../../components/PrescribeNotes.svelte';
	import Header from '../../../components/PaginationHeader.svelte';

	export let data;
</script>

<Header  backLink={"/lookup"} backText={"Patient Lookup"} finalPage/>
<div class="container">
	<PatientCard patient={data.record} />
	<PrescribeNotes overview={data.overview} notes={data.notes}/>
</div>

<style>
	.container {
		display: flex;
		flex: 1;
		gap: 32px;
	}
</style>
