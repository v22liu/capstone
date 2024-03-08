<script>
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import profilePic from '$lib/images/profile_photo.png';

	export let patient = {};
	/**
	 * @type {any}
	 */
	let { name, sex, dob, village, phone, id, natID } = patient;
</script>

<div class="card">
	<div class="profile_pic">
		<img src={profilePic} />
	</div>

	<div class="card_info">
		<p>
			Name:
			<br /> Sex:
			<br /> Birthday:
			<br /> Village:
			<br /> Phone Number:
            <br /> National ID:
		</p>
		<p class="patient_info">
			{name}
			<br />
			{sex}
			<br />
			{dob}
			<br />
			{village}
			<br />
			{phone}
            <br /> 
            {natID}
		</p>
	</div>

	<div class="button_group">
		<a href="/patient/{id}">
			<Button kind="secondary">Patient Record</Button>
		</a>
		<a href="/prescribe/{id}">
			<Button>Prescribe</Button>
		</a>
	</div>
</div>

<style>
	.card {
		max-width: max-content;
		min-width: fit-content;
		height: 530px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.card_info {
		display: flex;
		gap: 16px;
	}

	.profile_pic {
		display: flex;
		justify-content: center;
	}

	.button_group {
		display: flex;
		justify-content: center;
		flex-flow: space-between;
		gap: 8px;
	}
	.patient_info {
		font-weight: bold;
		/* flex: 1; */
		display: fill;
	}
</style>
