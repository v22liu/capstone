<script>
	import { Tag, ProgressBar, Button } from 'carbon-components-svelte';
	import CheckmarkOutline from 'carbon-icons-svelte/lib/CheckmarkOutline.svelte';
	import Camera from 'carbon-icons-svelte/lib/Camera.svelte';

	// @ts-ignore
	let stream;
	// @ts-ignore
	let videoRef;

	async function getStream() {
		try {
			stream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: false
			});
			videoRef.srcObject = stream;
		} catch (err) {
			console.error(err);
		}
		// console.log(stream.getTracks()[0])
	}

	async function stopStream() {
		stream.getTracks().forEach((track) => track.stop());
		videoRef.srcObject = null;
	}
</script>

<div>
	<h4>Video Capture</h4>
	<h5>For photo recognition.</h5>
	<p>
		Follow the on screen instructions to position patient then ask them to hold still and press
		record
	</p>
	<div style="display: flex; width:fit-content; margin: 0.5rem 0">
		<Tag
			type="green"
			icon={CheckmarkOutline}
			style="color: white; margin: 0 0.75rem 0 0; background-color: #24A148">good positioning</Tag
		>
		<p style="color: #24A148; font-weight: bold">Hold still!</p>
	</div>

	<video autoplay={true} bind:this={videoRef} style="width: 100%;">
		<track kind="captions" />
	</video>

	<div style="display: flex; margin-top: 0.5rem; width: 100%; gap: 1rem">
		<ProgressBar
			value={100}
			labelText="Recording Progress"
			helperText="Good Recording."
			status="finished"
			style="width: 100%"
		/>
		<Button kind="secondary" icon={Camera} on:click={getStream}>Record</Button>
	</div>
</div>

<style>
	div {
		width: 35%;
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
