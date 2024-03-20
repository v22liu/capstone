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
	import { PrescriptionReason, Dosages, PrescriptionWarnings, PrescriptionTimings, Medications, DefaultDrugSettings } from '$lib/prescription/prescription';

	export let overview = {};
	export let notes = {}

	let bin, type;
	let { current_medication, allergies, conditions } = overview;
	let name = 'Albendazole',
		dosage,
		reason,
		count = 1,
		frequency = 1,
		usagePeriod = 1,
		timeOfDay,
		warnings = [];

	$: if (name) {
		dosage = DefaultDrugSettings[name].dosage;
		bin = DefaultDrugSettings[name].bin;
		reason = DefaultDrugSettings[name].reason;
		count = parseFloat(DefaultDrugSettings[name].count);
		type = DefaultDrugSettings[name].type;
		frequency = parseInt(DefaultDrugSettings[name].frequency);
		usagePeriod = parseInt(DefaultDrugSettings[name].usagePeriod);
		timeOfDay = DefaultDrugSettings[name].timeOfDay;
		warnings = DefaultDrugSettings[name].warnings ?? [];

		if (type !== 'pill') {
			count = 1;
			frequency = 1
		}
		if (type === 'cream') {
			count = 'paka'
		}
	}

	$: prescription = {
		name,
		bin,
		dosage,
		reason,
		count,
		frequency,
		usagePeriod,
		timeOfDay,
		warnings,
		type
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
						bind:value={current_medication}
						readonly
					/>
					<TextArea
						labelText="Allergies"
						placeholder="Placeholder text (optional)"
						light
						rows={7}
						bind:value={allergies}
						readonly
					/>
					<TextArea
						labelText="Conditions"
						placeholder="Placeholder text (optional)"
						light
						rows={7}
						bind:value={conditions}
						readonly
					/>
				</div>
			</TabContent>
			<TabContent>
				<MedicalRecords {notes}> </MedicalRecords> 	
			</TabContent>
			<TabContent>
				<h1>Medication</h1>
				<div class="medication">
					<Select 
						labelText="Drug Search" 
						light 
						bind:value={name} 
						on:change={(e) => (name = e.target.value)}
					>
						{#each Medications as opt}
							<SelectItem value={opt} text={opt} />
						{/each}
					</Select>
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
					<div>Location: {bin ? `Bin ${bin}` : 'Unknown'}</div>
					<div>Remaining Stock: 752 units</div>
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
					<div style="display:flex; flex-direction:column">
					<div class="InstructionStatement">
						<div style="height:30px">{type === 'cream' ? 'apply' : 'take'}</div>
						{#if type !== 'cream'}
							<NumberInput label="Count" light bind:value={count} min={1} max={4} />
							<div style="height:30px">{type === 'liquid' ? 'mL' : type}</div>
						{/if}

						<NumberInput label="Frequency" light bind:value={frequency} min={1} max={5} />
						<div style="height:30px">{type === 'cream' ? 'times': ''} a day for</div>
						<NumberInput label="Usage Period" light bind:value={usagePeriod} min={1}/>
						<div style="height:30px">days.</div>
					</div>
					<div style="height:30px">{type !== 'pill' ? 1 : count * frequency * usagePeriod} units dispensed.</div>
					</div>

					<div style="display:flex; flex-direction:column; gap:4px">
					<p> Drug Warnings and Special Instructions (select up to 3) </p>
					<div style="display:flex; flex-direction:row;">
						
						<div style="width:200px">
							<p> Medication Timing:</p>
							<RadioButtonGroup orientation = "vertical"
								bind:selected={timeOfDay}
							>
								{#each Object.entries(PrescriptionTimings) as [opt, translatedOpt]}
									<RadioButton labelText={opt} value={opt} />
								{/each}
							</RadioButtonGroup>
							{#if timeOfDay}
								<Button kind="danger-ghost" size="small" on:click={() => timeOfDay = undefined} style="margin-top: 10px">Clear</Button>
							{/if}
						</div>
						<div>
							<p> Drug Warnings:</p>
							{#each Object.entries(PrescriptionWarnings) as [opt, translatedOpt]}
								<Checkbox 
									labelText={opt} 
									value={opt} 
									bind:warnings 
									checked={warnings.includes(opt)} 
									on:change={() => {
										if (warnings.includes(opt)) {
											warnings = warnings.filter((w) => w !== opt);
										} else {
											if (warnings.length < 3) warnings = [...warnings, opt];
										}
									}} 
									disabled={warnings.length >= 3 && !warnings.includes(opt)}
								/>
							{/each}
						</div>
					</div>
				</div>
				</div>

				<div class="buttons">
					<Button on:click={printLabel}>Prescribe</Button>
				</div>
			</TabContent>
			
		</svelte:fragment>
	</Tabs>
</div>

<div style="display: block; background-color:#f4f4f4; padding: 16px">
	<h1>Label Preview</h1>
	<div style="display: block" id="label">
		<ScriptLabel {...prescription} />
	</div>
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
