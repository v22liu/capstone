export interface PatientRecord {
  id: string;
  name: string;
  dob: number;
  sex: string;
  phone: string;
  village: string;
}

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