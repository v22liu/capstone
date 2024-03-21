<script>
	import EditPatient from '../../components/EditPatient.svelte';
	import Header from '../../components/PaginationHeader.svelte';
</script>

<Header backLink={'/lookup'} backText={'Patient Lookup'} finalPage />
<section>
	<EditPatient cta="Create" takePhoto />
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		gap: 2rem;
	}
</style>
