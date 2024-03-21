<script>
	import EditPatient from '../../components/EditPatient.svelte';
	import Header from '../../components/PaginationHeader.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let form;

	onMount(() => {
		if (form?.success && form?.id) {
			goto("/patient/" + form.id)
		}
	});
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
