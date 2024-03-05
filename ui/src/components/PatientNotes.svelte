<script>
	import { Button, Tabs, Tab, TabContent, TextArea,} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
</script>

<div class="container">
	<Tabs style="margin-bottom: 1rem">
		<Tab label="Patient Info"/>
		<Tab label="Medical Records" />

		<svelte:fragment slot="content">
			<TabContent>
				<div class="PatientInfo">
					<TextArea labelText="Current Medication" placeholder="Placeholder textoptional)" light rows={7} />
					<TextArea labelText="Allergies" placeholder="Placeholder textoptional)" light rows={7} />
					<TextArea labelText="Conditions" placeholder="Placeholder textoptional)" light rows={7} />
				</div>
				<div class="buttons">
					<Button icon={Add}>Save</Button>
					<Button>Save & Prescribe</Button>
				</div>
			</TabContent>
			<TabContent>
				<section>
					<div class = "medicalRecords">
						<div class = "RecordsList">
							<div> rec 1 </div>
							<div> rec 1 </div>
							<div> rec 1 </div>
							<div> rec 1 </div>
							<div> rec 1 </div>
							<div> rec 1 </div>
							<div> rec 1 </div>
							<div> rec 1 </div>

						</div>
						<TextArea placeholder="Placeholder textoptional)" light rows={33} />
					</div>
				</section>
				<div class="buttons">
					<Button icon={Add}>Save</Button>
					<Button>Save & Prescribe</Button>
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
	.medicalRecords{
		display: flex;
		flex-direction: row;
		gap: 16px;
		height: 100%;
	}
	.RecordsList{
		display: flex;
		width: 15%;
		padding: 16px;
		gap: 8px;
		border-bottom: #8D8D8D;
		flex-direction: column;
		background-color: white;
	}
	.PatientInfo{
		display: flex;
		flex-direction: column;
		gap: 16px;
		
	}	
	
	
</style>
