<script>
	import { Button, Tabs, Tab, TextArea } from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
</script>

<div class="container">
	<Tabs>
		<Tab label="Conditions" />
		<Tab label="Clinic Records" />
	</Tabs>
	<div class="text-area-container">
		<TextArea style="margin-top: 1rem;" placeholder="Placeholder text (optional)" light rows={33} />
	</div>
	<div class="cta-container">
		<Button icon={Add}>Save</Button>
		<Button>Save & Prescribe</Button>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #f4f4f4;
		padding: 1rem;
	}
	.cta-container {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}
	.text-area-container {
		flex: 1;
		/* background-color: red; */
	}
</style>
