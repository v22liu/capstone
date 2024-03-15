<script>
	import { Button, TextArea, TextInput, ButtonSet } from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';

	export let patient = {};
	export let noEdit= false;
	export let notes = []
	let { id } = patient;

	const fakeNotes = [
		{
			title: 'Clinic Visit',
			date: new Date('2024-05-21'),
			note_id: '1',
			notes: 'This is a note about the patient in the Spring of 2024.'
		},
		{
			title: 'Clinic Visit',
			date: new Date('2023-08-21'),
			note_id: '2',
			notes: 'This is a note about the patient in the Fall of 2023.'
		},
		{
			title: 'Clinic Visit',
			date: new Date('2023-06-21'),
			note_id: '3',
			notes: 'This is a note about the patient in the Summer of 2023.'
		}
	]
	
	let selectedNote = fakeNotes[0]
</script>

<div class="medicalRecords">
	<div class="RecordsList" style="min-width:200px">
		<ButtonSet stacked>
			{#each fakeNotes as note, index}
				<Button kind="ghost" size="lg" on:click={() => selectedNote = fakeNotes[index]}>
					<div style="display: flex; flex-direction: column;">
						<p>
							{note.title}
						</p>
						<p>
							{note.date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
						</p>
					</div>
				</Button>
			{/each}
		</ButtonSet>
		{#if !noEdit}
			<Button icon={Add}>New Record</Button>
		{/if}
		
	</div>
	<section id="FullRecord">
		<TextArea light labelText="Record Name" placeholder="Clinic Notes" bind:value={selectedNote.title} readonly={noEdit} rows={1}></TextArea>
		<TextArea
			labelText="Record Details"
			placeholder="Placeholder text (optional)"
			light
			rows={25}
			bind:value={selectedNote.notes}
			readonly={noEdit}
		/>
	</section>
</div>

<style>
	.medicalRecords {
		display: flex;
		flex-direction: row;
		gap: 16px;
		height: 100%;
	}
	.RecordsList {
		display: flex;
		width: 25%;
		padding: 16px;
		gap: 8px;
		border-bottom: #8d8d8d;
		flex-direction: column;
		justify-content: space-between;
		background-color: white;
	}
	.buttons {
		display: flex;
		justify-content: flex-end;
		margin-top: 1rem;
		gap: 1rem;
	}
	
	section {
		width: 100%;
	}

	#FullRecord {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
