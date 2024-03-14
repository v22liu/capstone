import type { PatientRecord } from '$lib/types/PatientRecord';

export async function createRecord(record: Omit<PatientRecord, 'id'>) {
	try {
		const response = await fetch('http://127.0.0.1:5000/patients', {
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
	const response = await fetch('http://127.0.0.1:5000/patients');
	const data = await response.json();

	return data;
}

export async function getPatientRecord(id: string) {
	const response = await fetch('http://127.0.0.1:5000/patients/' + id);
	const data = await response.json();

	return data;
}

export async function updatePatientRecord(record: PatientRecord) {
	try {
		const response = await fetch('http://127.0.0.1:5000/patients/' + record.id, {
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
