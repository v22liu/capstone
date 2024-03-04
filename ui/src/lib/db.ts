import type { PatientRecord } from '../types/PatientRecord';
import Dexie, { type Table } from 'dexie';

export class MyDexieExtension extends Dexie {
	patientData!: Table<PatientRecord>;

	constructor() {
		super('patientData.db');
		this.version(1).stores({
			patientData: '&id, name, dob, sex, phone, village'
		});
	}
}

export const db = new MyDexieExtension();

export async function createRecord(record: PatientRecord) {
	await db.patientData.add(record);
}

export async function getPatientRecords() {
	return db.patientData.toArray();
}

export async function deletePatientRecord(id: string) {
	await db.patientData.delete(id);
}

export async function updatePatientRecord(record: PatientRecord) {
	await db.patientData.update(record.id, record);
}

export async function getPatientRecord(id: string) {
	return db.patientData.get(id);
}
