<script>
	// @ts-nocheck

	import { ProgressBar, Button, TextInput } from 'carbon-components-svelte';
	import Microphone from 'carbon-icons-svelte/lib/Microphone.svelte';
	import Soundwave from '$lib/images/soundwave.jpg';

	import { onMount } from 'svelte';

	export let search = () => {};
	export let toggle = () => {};
	export let createAudioFile = false;
	export let getFileName = () => {};

	let isDisabled = true;
	let intervalId;
	let progress = 0;

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
			const audioBlob = new Blob(media, { type: 'audio/wav' });
			audio.src = URL.createObjectURL(audioBlob);
			search([media, audio.src]);
			media = [];
			if (createAudioFile) {
				saveAudioFile(audioBlob)
			}
		};
	});

	async function saveAudioFile(audioBlob) {
		const formData = new FormData();
		formData.append('file', audioBlob, 'voice.wav');
		const response = await fetch('http://127.0.0.1:8000/save-audio-file', {
			method: 'POST',
			body: formData,
			cache: 'no-cache',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST',
				'Access-Control-Allow-Headers': 'Content-Type'
			}
		});
		const res = await response.json();
		console.log(res.filename);
		getFileName(res.filename);
	}

	function startRecording() {
		// @ts-ignore
		mediaRecorder.start();
		isDisabled = !isDisabled;
	}

	function stopRecording() {
		// @ts-ignore
		mediaRecorder.stop();
		toggle();

		isDisabled = !isDisabled;

		let increment = 2;
		intervalId = setInterval(() => {
			progress += increment;
			if (progress >= 100) {
				clearInterval(intervalId);
			}
		}, 50);
	}

	$: helpText =
		progress == 0
			? 'Waiting for audio to process'
			: progress == 100
				? 'Audio processing complete'
				: 'Audio processing in progress';
</script>

<div>
	<h4>Voice Recording</h4>
	<p>Ask the patient to speak their name into the microphone while recording.</p>

	<div style="display: flex; margin: 0.5rem 0 2rem; width: 100%; gap: 1rem">
		<audio controls style="display: block; flex: 1"></audio>
		<Button
			kind="secondary"
			id="startRecord"
			disabled={!isDisabled}
			icon={Microphone}
			on:click={startRecording}>Record</Button
		>
		<Button
			kind="danger"
			id="stopRecord"
			disabled={isDisabled}
			icon={Microphone}
			on:click={stopRecording}>Stop</Button
		>
	</div>
	<ProgressBar
		value={progress}
		labelText="Audio Processing"
		helperText={helpText}
		status={progress == 100 ? 'finished' : 'active'}
		style="width: 100%;"
		max={100}
	/>
</div>

<style>
	h4 {
		font-weight: bold;
	}
	h5 {
		font-weight: normal;
		font-size: 1.15rem;
		margin-bottom: 1rem;
	}
</style>
