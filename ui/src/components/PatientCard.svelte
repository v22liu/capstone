<script>
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	// import profilePic from '$lib/images/profile/profile_photo.png';

	export let patient = {};
	/**
	 * @type {any}
	 */
	let { name, sex, day_of_birth, month_of_birth, year_of_birth, village, phone, id, natID, photo_file_path, audio_file_path } = patient;
	let photoPath = photo_file_path ? `$lib/images/profile/${photo_file_path}` : '$lib/images/profile/profile_photo.png';
	const profilePics = import.meta.glob('$lib/images/profile/*', { eager: true });
</script>

<div class="card">
	<div class="profile_pic">
		<!-- {
			profilePics[photoPath] || <img src={profilePics[photoPath]} />
		} -->
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
			{month_of_birth}/{day_of_birth}/{year_of_birth}
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
		height: 550px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		background-color: white;
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
