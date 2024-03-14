<script>
	import { Button, Tabs, Tab, TabContent, TextArea, Form } from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import MedicalRecords from './MedicalRecords.svelte';

	export let patient = {};

	let { id } = patient;
</script>

<div class="container">
	<Tabs style="margin-bottom: 1rem">
		<Tab label="Patient Info" />
		<Tab label="Medical Records" />

		<svelte:fragment slot="content">
			<TabContent>
				<Form method="POST" action="?/overview">
					<input type="hidden" name="patient_id" value={1} />
					<div class="PatientInfo">
						<TextArea
							labelText="Current Medication"
							placeholder="Placeholder text (optional)"
							light
							rows={7}
							name="current_medication"
						/>
						<TextArea
							labelText="Allergies"
							placeholder="Placeholder text (optional)"
							light
							rows={7}
							name="allergies"
						/>
						<TextArea
							labelText="Conditions"
							placeholder="Placeholder text (optional)"
							light
							rows={7}
							name="conditions"
						/>
					</div>
					<div class="buttons">
						<Button type="submit" kind="secondary">Save</Button>
						<a href="/prescribe/{id}">
							<Button type="submit">Save & Prescribe</Button>
						</a>
					</div>
				</Form>
			</TabContent>
				
			<TabContent><MedicalRecords/></TabContent>
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
		flex-direction: column;
		justify-content: space-between;
		width: 20%;
		padding: 16px;		
		border-bottom: #8d8d8d;
		background-color: white;
	}
	.PatientInfo {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
