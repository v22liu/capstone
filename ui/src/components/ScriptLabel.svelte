<script>
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
</script>

<div class="Label">
	<div class="Header">
		<div>Drug Name</div>
		<div>Bin Number</div>
	</div>

	<div class="Reason">
		<img src={imgReason} /> Indication for use
	</div>

	<div class="Warnings">
		<div class="Warning">
			<img src={imgWarn1} /> Warning1
		</div>

		<div class="Warning">
			<img src={imgWarn2} /> Warning2
		</div>

		<div class="Warning">
			<img src={imgWarn3} /> Warning3
		</div>
	</div>

	<div>
		<table width="100%">
			<tbody>
				<tr>
					<td class="TableHeader"> <h1>2 X 3</h1> </td>
					<td class="TableHeader"> <h1>7/7</h1> </td>
				</tr>
				<tr>
					<td> <img src={imgWakeUp} class="TableTimes" /> </td>
					<td>
						<img src={imgPill} class="TableMedication" />
						<img src={imgPill} class="TableMedication" />
					</td>
				</tr>
				<tr>
					<td> <img src={imgBreakfast} class="TableTimes" /> </td>
					<td> </td>
				</tr>
				<tr>
					<td> <img src={imgLunch} class="TableTimes" /> </td>
					<td>
						<img src={imgPill} class="TableMedication" />
						<img src={imgPill} class="TableMedication" />
					</td>
				</tr>
				<tr>
					<td> <img src={imgDinner} class="TableTimes" /> </td>
					<td> </td>
				</tr>
				<tr>
					<td> <img src={imgBedtime} class="TableTimes" /> </td>
					<td>
						<img src={imgPill} class="TableMedication" /><img
							src={imgPill}
							class="TableMedication"
						/>
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
		border: solid;
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
