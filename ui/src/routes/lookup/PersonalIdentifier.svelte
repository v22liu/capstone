<script>
	import PatientForm from '../../components/PatientForm.svelte';

	 export let toggle;
	 export let search = () => {};
</script>

<div>
	<h4>Personal Identifiers</h4>
	<PatientForm toggle={() => toggle()} {search}/>
</div>

<style>
	h4 {
		font-weight: bold;
	}
</style>
