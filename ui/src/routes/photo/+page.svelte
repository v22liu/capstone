<script>
	// @ts-nocheck
	import { Button } from 'carbon-components-svelte';
	import { onMount, onDestroy } from 'svelte';
	import PaginationHeader from '../../components/PaginationHeader.svelte';

	let stream;
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
	}

	async function stopStream() {
		stream.getTracks().forEach((track) => track.stop());
		videoRef.srcObject = null;
	}

	onMount(getStream);
	onDestroy(stopStream);
</script>

<PaginationHeader backLink={"/create"} backText={"Patient Record"} finalPage/>
<div>
	<video autoplay={true} bind:this={videoRef} style="width: 75%; height: 60%">
		<track kind="captions" />
	</video>

	<a href="/create">
		<Button kind="secondary" on:click={getStream}>Take photo</Button>
	</a>
</div>

<style>
	div {
		width: 100vw;
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	video {
		width: 75%;
		height: 40%;
		margin-bottom: 1rem;
	}
</style>
