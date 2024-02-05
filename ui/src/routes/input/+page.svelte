<script>
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

<svelte:head>
	<title>Input</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="container mx-auto px-4">
	<h1 class="text-4xl text-blue-500 my-4">Webcam Stream Mastery</h1>
	<button class="rounded-sm bg-slate-600 text-white px-4 py-2" on:click={getStream}
		>Start Stream</button
	>
	<button class="rounded-sm bg-red-600 text-white px-4 py-2" on:click={stopStream}
		>Stop Stream</button
	>
	<video class="mt-4 rounded-sm" width="640" height="480" autoplay={true} bind:this={videoRef}>
		<track kind="captions" />
	</video>
</section>
