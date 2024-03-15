<script>
	import PatientForm from '../../components/PatientForm.svelte';

	 export let toggle;
</script>

<div>
	<h4>Personal Identifiers</h4>
	<PatientForm toggle={() => toggle()}/>
</div>

<style>
	h4 {
		font-weight: bold;
	}
</style>
