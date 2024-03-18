<script>
	import EditPatient from '../../../components/EditPatient.svelte';
	import PatientNotes from '../../../components/PatientNotes.svelte';

	export let data;
</script>

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
