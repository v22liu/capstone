<script>
	import EditPatient from '../../components/EditPatient.svelte';
	import PatientNotes from '../../components/PatientNotes.svelte';
</script>

<section>
	<EditPatient />
	<PatientNotes />
</section>

<style>
	section {
		display: flex;
		gap: 2rem;
	}
</style>
