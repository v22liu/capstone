<script>
	import { ProgressBar, Button, TextInput } from 'carbon-components-svelte';
	import Microphone from 'carbon-icons-svelte/lib/Microphone.svelte';
	import Soundwave from '$lib/images/soundwave.jpg';

	import { onMount } from 'svelte';
	/**
	 * @type {BlobPart[] | undefined}
	 */
	let media = [];
	/**
	 * @type {MediaRecorder | null}
	 */
	let mediaRecorder = null;
	onMount(async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		mediaRecorder = new MediaRecorder(stream);
		mediaRecorder.onstart = () => console.log('recording started');
		mediaRecorder.ondataavailable = (e) => media.push(e.data);
		mediaRecorder.onstop = function () {
			console.log('stopped');
			if (media.length === 0) {
				console.log('no data');
				return;
			}
			const audio = document.querySelector('audio');
			if (!audio) {
				console.log('no audio');
				return;
			}
			const blob = new Blob(media, { type: 'audio/ogg; codecs=opus' });
			media = [];
			audio.src = window.URL.createObjectURL(blob);
		};
	});
	function startRecording() {
		// @ts-ignore
		mediaRecorder.start();
	}
	function stopRecording() {
		// @ts-ignore
		mediaRecorder.stop();
		toggle();
	}

	/**
	 * @type {() => void}
	 */
	 export let toggle;
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
		<audio controls style="display: block;"></audio>
		<Button kind="secondary" icon={Microphone} on:click={startRecording}>Record</Button>
		<Button kind="danger" icon={Microphone} on:click={stopRecording}>Stop</Button>
	</div>

	<TextInput labelText="Name Identified" placeholder="John Doe" style="width:400px" />
</div>

<style>
	div {
		width: 70%;
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
