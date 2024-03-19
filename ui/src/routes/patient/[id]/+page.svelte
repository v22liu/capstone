<script>
	import EditPatient from '../../../components/EditPatient.svelte';
	import PatientNotes from '../../../components/PatientNotes.svelte';
	import Header from '../../../components/PaginationHeader.svelte';

	export let data;
</script>

<Header backLink={"lookup"} backText={"Patient Lookup"} nextLink={"prescribe"} nextText={"Prescribe"}/>
<section>
	<EditPatient patient={data.record} cta="Save Changes" />
	<PatientNotes patient={data.record} overview={data.overview} notes={data.notes}/>
</section>

<style>
	section {
		display: flex;
		gap: 3rem;
	}
</style>
