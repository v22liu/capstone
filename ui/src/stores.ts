import { writable } from 'svelte/store';
import type { PatientRecord } from './lib/types/PatientRecord';

export const currentRecord = writable({
	id: '',
	name: '',
	dob: new Date().toISOString(),
	sex: '',
	phone: '',
	village: ''
} as PatientRecord);
