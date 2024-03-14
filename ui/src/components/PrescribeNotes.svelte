<script>
// @ts-nocheck

	import {
		Button,
		Checkbox,
		Tabs,
		Tab,
		TabContent,
		TextArea,
		TextInput,
		Select,
		SelectItem,
		MultiSelect,
		NumberInput,
		RadioButtonGroup,
		RadioButton
	} from 'carbon-components-svelte';
	
	import ScriptLabel from './ScriptLabel.svelte';
	import MedicalRecords from './MedicalRecords.svelte'; 
	import { PrescriptionReason, Dosages, PrescriptionWarnings, PrescriptionTimings } from '$lib/prescription/prescription';

	let name = 'Name',
		dosage,
		reason,
		count = 1,
		frequency = 1,
		usagePeriod = 1,
		timeOfDay,
		warnings = [];

	const bins = {
		A: 1,
		B: 2,
		Name: '#'
	};

	$: bin = bins[name];

	$: prescription = {
		name,
		bin,
		dosage,
		reason,
		count,
		frequency,
		usagePeriod,
		timeOfDay,
		warnings
	};

	$: console.log(prescription);

	function printLabel() {
		const element = document.getElementById('label');
		if (!element) return;
		const clone = element.cloneNode(true);

		const body = document.body;
		const originalChildren = [...body.children];

		while (body.firstChild) {
			body.firstChild.remove();
		}

		body.appendChild(clone);

		window.print();

		while (body.firstChild) {
			// @ts-ignore
			body.firstChild.remove();
		}

		for (const child of originalChildren) {
			body.appendChild(child);
		}
	}
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
				<MedicalRecords> </MedicalRecords> 	
			</TabContent>
			<TabContent>
				<h1>Medication</h1>
				<div class="medication">
					<TextInput labelText="Drug Search" light bind:value={name} />
					<Select
						labelText="Dosage"
						light
						bind:selected={dosage}
						on:change={(e) => (dosage = e.target.value)}
					>
						{#each Dosages as opt}
							<SelectItem value={opt} text={opt} />
						{/each}
					</Select>
				</div>
				<div class="medication">
					<div>Location: Bin {bin}</div>
					<div>Remaining Stock: X units</div>
				</div>
				<hr />
				<h1>Prescription Instructions</h1>
				<div class="contain">
					<!-- not sure why I need both the bind and onchange -->
					<Select
						labelText="Reason for Prescription"
						style="max-width:800px"
						light
						bind:selected={reason}
						on:change={(e) => (reason = e.target.value)}
					>
						{#each Object.entries(PrescriptionReason) as [opt, translatedOpt]}
							<SelectItem value={opt} text={opt} />
						{/each}
					</Select>
					<div class="InstructionStatement">
						<div style="height:30px">take</div>
						<NumberInput label="Count" light bind:value={count} />
						<div style="height:30px">pills</div>
						<NumberInput label="Frequency" light bind:value={frequency} />
						<div style="height:30px">for</div>
						<NumberInput label="Usage Period" light bind:value={usagePeriod} />
						<div style="height:30px">days.</div>
						<div style="height:30px">{count * frequency * usagePeriod} units dispensed.</div>
					</div>
					<RadioButtonGroup
						legendText="Drug Warnings or Special Instructions (select up to 3)"
						bind:selected={timeOfDay}
					>
						{#each Object.entries(PrescriptionTimings) as [opt, translatedOpt]}
							<RadioButton labelText={opt} value={opt} />
						{/each}
					</RadioButtonGroup>
					<!-- <div style="display: flex;"> -->
					{#each Object.entries(PrescriptionWarnings) as [opt, translatedOpt]}
						<Checkbox labelText={opt} value={opt} bind:warnings on:change={() => {
							if (warnings.includes(opt)) {
								warnings = warnings.filter((w) => w !== opt);
							} else {
								warnings = [...warnings, opt];
							}
						
						}} />
					{/each}
					<!-- </div> -->
				</div>
				<div class="buttons">
					<Button on:click={printLabel}>Prescribe</Button>
				</div>
			</TabContent>
			
		</svelte:fragment>
	</Tabs>
</div>

<div style="display: block; background-color:#f4f4f4; padding: 16px" id="label">
	<h1>Label Preview</h1>
	<ScriptLabel {...prescription} />
</div>

<style>
	.container {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 16px;
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
		align-items: flex-end;
		padding: 8px;
		gap: 16px;
	}

	.contain {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
</style>
