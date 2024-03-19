<script>
// @ts-nocheck

	import imgReason from '$lib/images/pain.jpg';
	import imgWarn1 from '$lib/images/14-take at night .png';
	import imgWarn2 from '$lib/images/14-take at night .png';
	import imgWarn3 from '$lib/images/14-take at night .png';
	import imgWakeUp from '$lib/images/WakeUp.png';
	import imgBreakfast from '$lib/images/Breakfast.png';
	import imgLunch from '$lib/images/Lunch.png';
	import imgDinner from '$lib/images/Dinner.png';
	import imgBedtime from '$lib/images/Bedtime.png';
	import imgPill from '$lib/images/pill.svg';
	import imgCream from '$lib/images/Cream.png';
	import imgInhaler from '$lib/images/Inhaler.png';
	import imgLiquid from '$lib/images/liquid.png';

	import Worms from '$lib/prescription/reasons/worms.png';
	import Infection from '$lib/prescription/reasons/infection.png';
	import Stomach from '$lib/prescription/reasons/stomach.jpg';
	import Pressure from '$lib/prescription/reasons/pressure.png';
	import Heart from '$lib/prescription/reasons/heart.png';
	import SkinIrritation from '$lib/prescription/reasons/skin-irritation.jpg';
	import Constipation from '$lib/prescription/reasons/constipation.jpg';
	import Allergies from '$lib/prescription/reasons/allergies.png';
	import Asthma from '$lib/prescription/reasons/asthma.jpg';
	import MentalHealth from '$lib/prescription/reasons/mental-health.jpg';
	import Cough from '$lib/prescription/reasons/cough.jpg';
	import SkinInfection from '$lib/prescription/reasons/skin-infection.jpg';
	import Pain from '$lib/prescription/reasons/pain.jpg';
	import IronAndVitamins from '$lib/prescription/reasons/vitamins.png';
	import Hemorrhoids from '$lib/prescription/reasons/hemorrhoids.png';
	import Diabetes from '$lib/prescription/reasons/diabetes.png';
	import ThroatOrTeeth from '$lib/prescription/reasons/throat.png';
	import Fever from '$lib/prescription/reasons/fever.jpg';
	import Diarrhea from '$lib/prescription/reasons/diarrhea.jpg';

	import BeforeBed from '$lib/prescription/timing/bedtime.png';
	import Morning from '$lib/prescription/timing/morning.png';
	import AsNeeded from '$lib/prescription/timing/needed.png';

	import AfterMeal from '$lib/prescription/warnings/after-meal.png';
	import Alcohol from '$lib/prescription/warnings/alcohol.png';
	import Meal from '$lib/prescription/warnings/meal.png';
	import Pregnant from '$lib/prescription/warnings/pregnant.png';
	import Rectum from '$lib/prescription/warnings/rectum.png';
	import Toilet from '$lib/prescription/warnings/toilet.png';
	import Vagina from '$lib/prescription/warnings/vagina.png';
	import Water from '$lib/prescription/warnings/water.png';
	import Pills from '$lib/prescription/warnings/pills.gif'

	import { PrescriptionTimings, PrescriptionWarnings, PrescriptionReason } from '$lib/prescription/prescription';

	export let name;
	export let bin;
	export let dosage;
	export let reason;
	export let count;
	export let frequency;
	export let usagePeriod;
	export let timeOfDay;
	export let warnings;
	export let type

	const reasonToImg = {
		Worms: Worms,
		Infection: Infection,
		Stomach: Stomach,
		Pressure: Pressure,
		Heart: Heart,
		'Skin Irritation': SkinIrritation,
		Constipation: Constipation,
		Allergies: Allergies,
		Asthma: Asthma,
		'Mental Health': MentalHealth,
		Vagina: Vagina,
		Cough: Cough,
		'Skin Infection': SkinInfection,
		Pain: Pain,
		'Iron and Vitamins': IronAndVitamins,
		Hemorrhoids: Hemorrhoids,
		Diabetes: Diabetes,
		'Throat or Teeth': ThroatOrTeeth,
		Fever: Fever,
		Diarrhea: Diarrhea
	}

	const timeToImg = {
		"Before Bed": BeforeBed,
		Morning: Morning,
		"As Needed": AsNeeded
	}

	const warningToImg = {
		'Chew Tablets': Pills,
		'Do Not Take While Pregnant': Pregnant,
		'After Eating': AfterMeal,
		'Stay Close to Toilet': Toilet,
		'Insert Into Rectum': Rectum,
		'Insert Into Vagina': Vagina,
		'Drink Water': Water,
		'Do Not Drink Alcohol': Alcohol,
		'Take With Meals': Meal,
	}

	const typeToImg = {
		'pill': imgPill,
		'cream': imgCream,
		'inhaler': imgInhaler,
		'liquid': imgLiquid
	}
</script>

<div class="Label">
	<div class="Header">
		<div>{name} ({dosage})</div>
		{#if bin}
			<div>Bin #{bin}</div>
		{/if}
	</div>

	<div class="Reason">
		<img src={reasonToImg[reason]} alt={reason}/>
		{PrescriptionReason[reason]}
	</div>

	{#if warnings.length > 0 || timeOfDay}
		<div class="Warnings">
			{#if timeOfDay}
				<div class="Warning">
					<img src={timeToImg[timeOfDay]} alt={timeOfDay}/>
					{PrescriptionTimings[timeOfDay]}
				</div>
			{/if}
			{#each warnings as warning}
				<div class="Warning">
					<img src={warningToImg[warning]} alt={warning}/>
					{PrescriptionWarnings[warning]}
				</div>
			{/each}
		</div>
	{/if}

	<div>
		<table width="100%">
			<tbody>
				<tr>
					<td class="TableHeader"> <h1>{count} X {frequency}</h1> </td>
					{#if usagePeriod}
						<td class="TableHeader"> <h1>{usagePeriod}/7</h1> </td>
					{/if}
				</tr>
				<tr>
					<td> <img src={imgWakeUp} class="TableTimes" /> </td>
					<td>
						{#if (frequency == 1 && timeOfDay != "Before Bed") || frequency > 1}
							{#each Array(count) as _, i}
								<img src={typeToImg[type]} class="TableMedication" key={i} alt="pil;"/>
							{/each}
						{/if}
					</td>
				</tr>
				<tr>
					<td> <img src={imgBreakfast} class="TableTimes" /> </td>
					<td> 
						{#if frequency == 5}
							{#each Array(count) as _, i}
								<img src={imgPill} class="TableMedication" key={i} alt="pil;"/>
							{/each}
						{/if}
					</td>
				</tr>
				<tr>
					<td> <img src={imgLunch} class="TableTimes" /> </td>
					<td>
						{#if frequency >= 3}
							{#each Array(count) as _, i}
								<img src={imgPill} class="TableMedication" key={i} alt="pil;"/>
							{/each}
						{/if}
					</td>
				</tr>
				<tr>
					<td> <img src={imgDinner} class="TableTimes" /> </td>
					<td> 
						{#if frequency >= 4}
							{#each Array(count) as _, i}
								<img src={imgPill} class="TableMedication" key={i} alt="pil;"/>
							{/each}
						{/if}
					</td>
				</tr>
				<tr>
					<td> <img src={imgBedtime} class="TableTimes" /> </td>
					<td>
						{#if frequency >= 2 || timeOfDay == "Before Bed"}
							{#each Array(count) as _, i}
								<img src={imgPill} class="TableMedication" key={i} alt="pil;"/>
							{/each}
						{/if}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style>
	.Label {
		width: 4in;
		height: 6in;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 16px;
		background-color: white;
	}
	.Header {
		display: flex;
		justify-content: space-between;
		height: auto;
	}
	.Reason {
		display: flex;
		justify-content: left;
		align-items: center;
		height: auto;
		gap: 16px;
		padding: 4px;
		border: solid;
	}
	.Warnings {
		display: flex;
		justify-content: left;
		align-items: top;
		height: auto;
		gap: 4px;
		padding: 4px;
		border: solid;
	}
	.Warning {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 4px;
		padding: 4px;
		width: 33%;
		border: solid;
	}
	.TableHeader {
		border: white;
	}
	.TableTimes {
		height: 50px;
	}
	.TableMedication {
		height: 40px;
	}
	img {
		object-fit: contain;
		max-width: 100%;
		max-height: 70px;
	}
	table {
		height: 1.5in;
		border: solid;
	}
	td {
		border: solid;
		width: 50%;
		vertical-align: middle;
		text-align: center;
	}
	h1 {
		font-size: 30px;
		font-weight: 400;
	}
</style>
