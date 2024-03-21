<script>
	import PatientForm from '../../components/PatientForm.svelte';

	 export let toggle;
	 export let search = () => {};

	 let currentlyLookup = true;
</script>

<div>
	<h4>Personal Identifiers</h4>
	<PatientForm {currentlyLookup} toggle={() => toggle()} {search}/>
</div>

<style>
	h4 {
		font-weight: bold;
	}
</style>
