<script>
	import { ProgressBar, Button, TextInput } from 'carbon-components-svelte';
	import Microphone from 'carbon-icons-svelte/lib/Microphone.svelte';
	import Soundwave from '$lib/images/soundwave.jpg';
</script>

<div>
	<h4>Voice Recording</h4>
	<h5>For speech to text.</h5>
	<p>Ask the patient to speak their name into the microphone while recording.</p>

	<img src={Soundwave} alt="Soundwave" style="width: 100%; margin: 1rem 0; height: 10rem" />

	<div style="display: flex; margin: 0.5rem 0 2rem; width: 100%; gap: 1rem">
		<ProgressBar
			value={100}
			labelText="Recording Progress"
			helperText="Good Recording."
			status="finished"
			style="width: 100%"
		/>
		<Button kind="secondary" icon={Microphone}>Record</Button>
	</div>

	<TextInput labelText="Name Identified" placeholder="John Doe" />
</div>

<style>
	div {
		width: 37.5%;
	}
	h4 {
		font-weight: bold;
	}
	h5 {
		font-weight: normal;
		font-size: 1.15rem;
		margin-bottom: 1rem;
	}
</style>
