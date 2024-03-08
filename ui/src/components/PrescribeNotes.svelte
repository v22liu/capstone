<script>
	import {
		Button,
		Tabs,
		Tab,
		TabContent,
		TextArea,
		TextInput,
		Select,
		SelectItem,
		MultiSelect
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
</script>

<div class="container">
	<Tabs style="margin-bottom: 1rem">
		<Tab label="Patient Info" />
		<Tab label="Medical Records" />
		<Tab label="Prescribe" />

		<svelte:fragment slot="content">
			<TabContent>
				<div class="PatientInfo">
					<TextArea
						labelText="Current Medication"
						placeholder="Placeholder text (optional)"
						light
						rows={7}
					/>
					<TextArea
						labelText="Allergies"
						placeholder="Placeholder text (optional)"
						light
						rows={7}
					/>
					<TextArea
						labelText="Conditions"
						placeholder="Placeholder text (optional)"
						light
						rows={7}
					/>
				</div>
			</TabContent>
			<TabContent>
				<section>
					<div class="medicalRecords">
						<div class="RecordsList">
							<div>rec 1</div>
							<div>rec 1</div>
							<div>rec 1</div>
							<div>rec 1</div>
							<div>rec 1</div>
							<div>rec 1</div>
							<div>rec 1</div>
							<div>rec 1</div>
						</div>
						<TextArea placeholder="Placeholder text (optional)" light rows={33} />
					</div>
				</section>
			</TabContent>

			<TabContent>
				<h1>Medication</h1>
				<div class="medication">
					<TextInput labelText="Drug Search" light />
					<Select labelText="Dosage" light />
				</div>
				<div class="medication">
					<div>Location: Bin X</div>
					<div>Remaining Stock: X units</div>
				</div>
				<hr />
				<h1>Prescription Instructions</h1>
				<div class="contain">
					<Select labelText="Reason for Prescription" style="max-width:800px" light />
					<div class="InstructionStatement">
						<div style="height:30px">take</div>
						<Select labelText="Dosage" light />
						<div style="height:30px">pills</div>
						<Select labelText="Frequency" light />
						<div style="height:30px">for</div>
						<Select labelText="Usage Period" light />
						<div style="height:30px">days.</div>
						<div style="height:30px">X units dispensed.</div>
					</div>
					<Select labelText="Time of Day (if specific)" style="max-width:300px" light />
					<MultiSelect
						titleText="Drug Warnings or Special Instructions (select up to 3)"
						style="max-width:800px"
						light
					/>
				</div>
				<div class="buttons">
					<a href="/prescribe">
						<Button>Prescribe</Button>
					</a>
				</div>
			</TabContent>
		</svelte:fragment>
	</Tabs>
</div>

<style>
	.container {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 1rem;
		background-color: #f4f4f4;
	}
	.buttons {
		display: flex;
		justify-content: flex-end;
		margin-top: 1rem;
		gap: 1rem;
	}
	.medicalRecords {
		display: flex;
		flex-direction: row;
		gap: 16px;
		height: 100%;
	}
	.RecordsList {
		display: flex;
		width: 15%;
		padding: 16px;
		gap: 8px;
		border-bottom: #8d8d8d;
		flex-direction: column;
		background-color: white;
	}
	.PatientInfo {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.medication {
		display: flex;
		padding: 8px;
		gap: 16px;
	}

	.InstructionStatement {
		display: flex;
		align-items: end;
		padding: 8px;
		gap: 16px;
	}

	.contain {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
</style>
