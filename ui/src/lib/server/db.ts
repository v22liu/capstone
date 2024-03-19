import type { PatientRecord, PatientOverview, ClinicNotes } from '$lib/types/types';

const BASE_URL = 'http://127.0.0.1:8000';

export async function createRecord(record: Omit<PatientRecord, 'id'>) {
	try {
		const response = await fetch(`${BASE_URL}/patients`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(record)
		});

		console.log(response);
	} catch (error) {
		console.error('Error creating patient record:', error);
		throw error;
	}
}

export async function getPatientRecords() {
	const response = await fetch(`${BASE_URL}/patients`);
	const data = await response.json();

	return data;
}

export async function getPatientRecord(id: string) {
	const response = await fetch(`${BASE_URL}/patients/${id}`);
	const data = await response.json();

	return data;
}

export async function updatePatientRecord(record: PatientRecord) {
	try {
		const response = await fetch(`${BASE_URL}/patients/${record.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(record)
		});

		const data = await response.json();
		console.log(data.message);
	} catch (error) {
		console.error('Error updating patient record:', error);
		throw error;
	}
}

export async function getPatientOverview(patient_id: string) {
	const response = await fetch(`${BASE_URL}/patient-overview/${patient_id}`);
	const data = await response.json();

	return data;
}

export async function updatePatientOverview(patient_id: string, overview: PatientOverview) {
	const response = await fetch(`${BASE_URL}/patient-overview/${patient_id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(overview)
	});

	// const data = await response.json();
	// console.log(data.message);
}

export async function getClinicNotes(patient_id: string) {
	console.log('retrieving notes for', patient_id);
	// const response = await fetch(`${BASE_URL}/notes?patient_id=${patient_id}`);
	// const data = await response.json();

	// return data;
}

export async function createClinicNote(note: Omit<ClinicNotes, 'date'>) {
	console.log('creating notes for', note.id, note);
	// const response = await fetch(`${BASE_URL}/clinic-notes`, {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(note)
	// });

	// const data = await response.json();
	// console.log(data.message);
}

export async function updateClinicNote(note: Omit<ClinicNotes, 'date'>) {
	console.log('updating notes for', note.id, note);
	// const response = await fetch(`${BASE_URL}/clinic-notes/${notes.id}`, {
	// 	method: 'PUT',
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(note)
	// });

	// const data = await response.json();
	// console.log(data.message);
}
