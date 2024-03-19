<script>
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import profilePic from '$lib/images/profile_photo.png';
	import Jancinta from '$lib/images/profile/1-jacinta-siago.png';
	import Abdul from '$lib/images/profile/2-abdulkarim-ali.png';
	import Medina from '$lib/images/profile/3-medina-maraka.png';
	import Juma from '$lib/images/profile/4-juma-ibrahim.png';
	import Minsu from '$lib/images/profile/5-minsu-hassan.png';
	import Kavuwa from '$lib/images/profile/6-kavuwa-musyoka.png';
	import Michael from '$lib/images/profile/7-sayimichael-kabelele.png';
	import Patricia from '$lib/images/profile/8-patricia-geni.png'

	export let patient = {};
	let { name, sex, day_of_birth, month_of_birth, year_of_birth, village, phone, id, natID, photo_file_path } = patient;

	const pathToPic = {
		'1-jancinta-siago.png': Jancinta,
		'2-adbulkarim-ali.png': Abdul,
		'3-medina-maraka.png': Medina,
		'4-juma-ibrahim.png': Juma,
		'5-minsu-hassan.png': Minsu,
		'6-kavuwa-musyoka.png': Kavuwa,
		'7-sayimichael-kabelele.png': Michael,
		'8-patricia-geni.png': Patricia,
	}
</script>

<div class="card">
	<div class="profile_pic">
		<img src={pathToPic[photo_file_path] ?? profilePic} height="297px" width="255px" alt="Profile Picture"/>
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
