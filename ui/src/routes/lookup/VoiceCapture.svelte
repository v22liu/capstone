<script>
// @ts-nocheck

	import { ProgressBar, Button, TextInput } from 'carbon-components-svelte';
	import Microphone from 'carbon-icons-svelte/lib/Microphone.svelte';
	import Soundwave from '$lib/images/soundwave.jpg';

	import { onMount } from 'svelte';
	let media = [];

	let mediaRecorder = null;
	onMount(async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		mediaRecorder = new MediaRecorder(stream);
		mediaRecorder.onstart = () => console.log('recording started');
		mediaRecorder.ondataavailable = (e) => media.push(e.data);
		mediaRecorder.onstop = function () {
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
	let intervalId;

	function stopRecording() {
		// @ts-ignore
		mediaRecorder.stop();
		toggle();

		let increment = 2;
		intervalId = setInterval(() => {
			progress += increment;
			if (progress >= 100) {
				clearInterval(intervalId);
			}
		}, 50);
	}

	/**
	 * @type {() => void}
	 */
	export let toggle;

	let progress = 0
	$: helpText = progress == 0 ? "Waiting for audio to process" : progress == 100 ? "Audio processing complete" : "Audio processing in progress"
	
</script>

<div>
	<h4>Voice Recording</h4>
	<h5>For speech to text.</h5>
	<p>Ask the patient to speak their name into the microphone while recording.</p>

	<div style="display: flex; margin: 0.5rem 0 2rem; width: 100%; gap: 1rem">
		<audio controls style="display: block; flex: 1"></audio>
		<Button kind="secondary" icon={Microphone} on:click={startRecording}>Record</Button>
		<Button kind="danger" icon={Microphone} on:click={stopRecording}>Stop</Button>
	</div>
	<ProgressBar
		value={progress}
		labelText="Audio Processing"
		helperText={helpText}
		status={progress == 100 ? "finished": "active"}
		style="width: 100%;"
		max={100}
	/>
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
