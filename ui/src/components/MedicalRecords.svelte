<script>
	import { Button, TextArea, TextInput, ButtonSet, Form } from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';

	export let patient = {};
	export let noEdit= false;
	export let notes = []
	let { id } = patient;
	
	let selectedNote = notes[0];
	let creatingRecord = notes.length === 0; 
</script>

<div class="medicalRecords">
	{#if notes.length > 0}
		<div class="RecordsList">
			<ButtonSet stacked>
				{#each notes as note, index}
					<Button kind="ghost" size="field" on:click={() => selectedNote = notes[index]}>
						<div style="display: flex; flex-direction: column">
							<p>
								{note?.title}
							</p>
							<p style="color:black">
								{note.date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
							</p>
						</div>
					</Button>
				{/each}
			</ButtonSet>
			
			{#if !noEdit}
			<Button kind={!creatingRecord ? 'secondary': 'danger-ghost'} icon={Add} on:click={() => creatingRecord = !creatingRecord}>
				{creatingRecord ? 'Cancel' : 'Add Record'}
			</Button>
			{/if}
		</div>
	{/if}
	{#if !creatingRecord}
		<Form style="flex: 1">
			<section id="FullRecord">
				<TextInput light labelText="Record Name" placeholder="Clinic Notes" bind:value={selectedNote.title} name="title"></TextInput>
				<TextArea
					labelText="Record Details"
					placeholder="Placeholder text (optional)"
					light
					rows={25}
					bind:value={selectedNote.notes}
					name="notes"
				/>
			</section>
			{#if !noEdit}
			<div style="display:flex; margin-top:8px; justify-content: flex-end"><Button type="submit">Save Changes</Button></div>
			{/if}
		</Form>
	{:else}
		<Form style="flex: 1" action="?/createNote" method="POST">
			<input type="hidden" name="patient_id" value={id} />
			<section id="FullRecord">
				<TextInput light labelText="Record test" placeholder="Clinic Notes" name="title"></TextInput>
				<TextArea
					labelText="Record Details"
					placeholder="Placeholder text (optional)"
					light
					rows={25}
					name="notes"
				/>
			</section>
			<div style="display:flex; margin-top:8px; justify-content: flex-end"><Button type="submit">Create</Button></div>
		</Form>
	{/if}
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
