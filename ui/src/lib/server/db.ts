// import type { PatientRecord } from "../../types/PatientRecord"

const db = new Map<string, PatientRecord>([
	[
		'1',
		{
			id: '1',
			name: 'Ethan Alvizo',
			dob: '01/01/1990',
			sex: 'Male',
			phone: '123-456-7890',
			village: 'Village A',
			natID: '1234567'
		}
	],
	[
		'2',
		{
			id: '2',
			name: 'Hannah Tario',
			dob: '02/02/1995',
			sex: 'Female',
			phone: '987-654-3210',
			village: 'Village B',
			natID: '1234567'

		}
	],
	[
		'3',
		{
			id: '3',
			name: 'Valerie Liu',
			dob: '05/05/1985',
			sex: 'Female',
			phone: '555-555-5555',
			village: 'Village C',
			natID: '1234567'
		}
	],
	[
		'4',
		{
			id: '4',
			name: 'Duru Uluk',
			dob: '08/08/1998',
			sex: 'Other',
			phone: '999-999-9999',
			village: 'Village D',
			natID: '1234567'
		}
	]
]);

export interface PatientRecord {
	id: string;
	name: string;
	dob: string;
	sex: string;
	phone: string;
	village: string;
	natID: string;
}

export async function createRecord(record: PatientRecord) {
	db.set(record.id, record);
}

export async function getPatientRecords() {
	return Array.from(db.values());
}

export async function getPatientRecord(id: string) {
	return db.get(id);
}

export async function deletePatientRecord(id: string) {
	db.delete(id);
}

export async function updatePatientRecord(record: PatientRecord) {
	db.set(record.id, record);
}

export async function clearPatientRecords() {
	db.clear();
}
