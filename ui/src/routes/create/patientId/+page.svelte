<script>
	import EditPatient from './EditPatient.svelte';
	import PatientNotes from './PatientNotes.svelte';
</script>

<section>
	<EditPatient />
	<PatientNotes />
</section>

<style>
	section {
		display: flex;
		gap: 3rem;
	}
</style>
