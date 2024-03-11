<script>
	import {
		Button,
		TextArea,
        TextInput
	} from 'carbon-components-svelte';
    import Add from 'carbon-icons-svelte/lib/Add.svelte';

    export let patient = {};
	let { id } = patient;

</script>

<div style="display:none; width:100%">
    <section id="EmptyRecord" style="display:flex; flex-direction:column; gap:16px;">
        <TextInput light labelText="Record Name" placeholder="Clinic Notes 2024"></TextInput>
        <TextArea labelText="Record Details" placeholder="Placeholder text (optional)" light rows={25} />
        <Button on:click={() => {
            const section = document.getElementById('EmptyRecord');
            if (section) section.replaceWith(FullRecord);
        }}>Save Record</Button>
    </section>
</div>

<div class="medicalRecords">
    <div class="RecordsList">
        <div>
        <div>rec 1</div>
        <div>rec 1</div>
        <div>rec 1</div>
        <div>rec 1</div>
        <div>rec 1</div>
        <div>rec 1</div>
        <div>rec 1</div>
        <div>rec 1</div>
        </div>
        <Button icon={Add} on:click={() => {
            const section = document.getElementById('FullRecord');
            if (section) section.replaceWith(EmptyRecord);
        }}>New Record</Button>
    </div>
    <section id="FullRecord">
        <TextArea placeholder="Placeholder text (optional)" light rows={33} />
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
		width: 15%;
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
    section{
        width: 100%;

    }
</style>
