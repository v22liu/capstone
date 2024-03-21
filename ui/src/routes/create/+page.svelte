<script>
	import EditPatient from '../../components/EditPatient.svelte';
	import PatientNotes from '../../components/PatientNotes.svelte';
	import Header from '../../components/PaginationHeader.svelte';
</script>

<Header backLink={"lookup"} backText={"Patient Lookup"} nextLink={"prescribe"} nextText={"Prescribe"}/>
<section>
	<EditPatient cta="Create" takePhoto />
</section>

<style>
	section {
		display: flex;
		gap: 2rem;
	}
</style>
