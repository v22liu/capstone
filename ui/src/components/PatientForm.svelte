<script>
	import {
		TextInput,
		Select,
		SelectItem,
		Form,
		FormGroup,
		DatePicker,
		DatePickerInput
	} from 'carbon-components-svelte';
	import { db } from "$lib/db"

	async function createEntry() {
		console.log("Creating entry")
		await db.patientData.add({
			id:"test",
			name: "ethan",
			dob: Date.now(),
			sex: "Male",
			village: "Dar es Salaam",
			phone: "123-456-7890"
		})
	}

	// // Open IndexedDB database
	// const dbName = 'myDatabase';
	// const dbVersion = 1;
	// const request = indexedDB.open(dbName, dbVersion);

	// request.onerror = function(event) {
	// 	console.error('Error opening database:', event.target.error);
	// };

	// request.onupgradeneeded = function(event) {
	// 	const db = event.target.result;

	// 	// Create object store
	// 	const objectStore = db.createObjectStore('patients', { keyPath: 'id', autoIncrement: true });

	// 	// Create indexes
	// 	objectStore.createIndex('name', 'name', { unique: false });
	// 	objectStore.createIndex('sex', 'sex', { unique: false });
	// 	objectStore.createIndex('dob', 'dob', { unique: false });
	// 	objectStore.createIndex('village', 'village', { unique: false });
	// 	objectStore.createIndex('phoneNumber', 'phoneNumber', { unique: false });
	// };

	// request.onsuccess = function(event) {
	// 	const db = event.target.result;

	// 	// Handle form submission
	// 	function handleSubmit(event) {
	// 		event.preventDefault();

	// 		// Get form values
	// 		const name = event.target.elements.name.value;
	// 		const sex = event.target.elements.sex.value;
	// 		const dob = event.target.elements.dob.value;
	// 		const village = event.target.elements.village.value;
	// 		const phoneNumber = event.target.elements.phoneNumber.value;

	// 		// Create patient object
	// 		const patient = {
	// 			name,
	// 			sex,
	// 			dob,
	// 			village,
	// 			phoneNumber
	// 		};

	// 		// Store patient object in IndexedDB
	// 		const transaction = db.transaction(['patients'], 'readwrite');
	// 		const objectStore = transaction.objectStore('patients');
	// 		const request = objectStore.add(patient);

	// 		request.onsuccess = function(event) {
	// 			console.log('Patient added to IndexedDB');
	// 		};

	// 		request.onerror = function(event) {
	// 			console.error('Error adding patient to IndexedDB:', event.target.error);
	// 		};
	// 	}

	// 	// Add event listener to form submission
	// 	const form = document.querySelector('form');
	// 	form.addEventListener('submit', handleSubmit);
	// }

</script>

<Form>
	<FormGroup>
		<TextInput light labelText="Name" placeholder="John Doe" name="name" />
	</FormGroup>
	<FormGroup>
		<Select labelText="Sex" light name="sex">
			<SelectItem value="male" text="Male" />
			<SelectItem value="female" text="Female" />
			<SelectItem value="other" text="Other" />
		</Select>
	</FormGroup>
	<FormGroup>
		<DatePicker light datePickerType="single">
			<DatePickerInput labelText="Date of Birth" placeholder="mm/dd/yyyy" name="dob" />
		</DatePicker>
	</FormGroup>
	<FormGroup>
		<Select labelText="Village" light name="village">
			<SelectItem value="Dar es Salaam" text="Dar es Salaam" />
			<SelectItem value="Dodoma" text="Dodoma" />
			<SelectItem value="Nansio" text="Nansio" />
		</Select>
	</FormGroup>
	<FormGroup>
		<TextInput light labelText="Phone Number" placeholder="123-456-7890" name="phoneNumber" />
	</FormGroup>
	<button on:click={createEntry}></button>
</Form>
