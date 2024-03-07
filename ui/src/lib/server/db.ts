// import type { PatientRecord } from "../../types/PatientRecord"

const db = new Map<string, PatientRecord>([
	[
		'1',
		{
			id: '1',
			name: 'Ethan Alvizo',
			dob: '1990-01-01',
			sex: 'Male',
			phone: '1234567890',
			village: 'Village A'
		}
	],
	[
		'2',
		{
			id: '2',
			name: 'Hannah Tario',
			dob: '1995-02-02',
			sex: 'Female',
			phone: '9876543210',
			village: 'Village B'
		}
	],
	[
		'3',
		{
			id: '3',
			name: 'Valerie Liu',
			dob: '1985-05-05',
			sex: 'Female',
			phone: '5555555555',
			village: 'Village C'
		}
	],
	[
		'4',
		{
			id: '4',
			name: 'Duru Uluk',
			dob: '1998-08-08',
			sex: 'Other',
			phone: '9999999999',
			village: 'Village D'
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