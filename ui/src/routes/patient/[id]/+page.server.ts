import {
	getPatientRecord,
	updatePatientRecord,
	getPatientOverview,
	updatePatientOverview,
	getClinicNotes,
	updateClinicNote,
	createClinicNote
} from '$lib/server/db';
import { fail } from '@sveltejs/kit';
import type { PatientRecord, PatientOverview, ClinicNotes } from '$lib/types/types.js';

export async function load({ params }) {
	const record = await getPatientRecord(params.id);
	const overview = await getPatientOverview(params.id);
	const notes = await getClinicNotes(params.id);

	return {
		record,
		overview,
		notes
	};
}

export const actions = {
	patient: async ({ request }) => {
		const formData = await request.formData();

		if (!formData.get('id')?.toString()) {
			return fail(400, { message: 'Missing required fields' });
		}

		const record: PatientRecord = {
			id: formData.get('id')?.toString() ?? '',
			name: formData.get('name')?.toString() || '',
			day_of_birth: formData.get('day_of_birth')?.toString() || '1',
			month_of_birth: formData.get('month_of_birth')?.toString() || '1',
			year_of_birth: formData.get('year_of_birth')?.toString() || '2024',
			sex: formData.get('sex')?.toString() || '',
			phone: formData.get('phone')?.toString() || '',
			village: formData.get('village')?.toString() || '',
			natID: formData.get('natID')?.toString() || '',
			photo_file_path: formData.get('photo_file_path')?.toString() || '',
		};

		await updatePatientRecord(record);

		return { success: true };
	},
	overview: async ({ request }) => {
		const formData = await request.formData();

		const patient_id = formData.get('patient_id')?.toString() || '';
		const overview: PatientOverview = {
			current_medication: formData.get('current_medication')?.toString() || '',
			allergies: formData.get('allergies')?.toString() || '',
			conditions: formData.get('conditions')?.toString() || ''
		};

		await updatePatientOverview(patient_id, overview);

		return { success: true };
	},
	updateNote: async ({ request }) => {
		const formData = await request.formData();

		const notes: Omit<ClinicNotes, 'date'> = {
			id: formData.get('id')?.toString() || '',
			title: formData.get('title')?.toString() || '',
			notes: formData.get('notes')?.toString() || ''
		};

		await updateClinicNote(notes);

		return { success: true };
	},
	createNote: async ({ request }) => {
		const formData = await request.formData();

		const note: Omit<ClinicNotes, 'id' | 'date'> = {
			patient_id: formData.get('patient_id')?.toString() || '',
			title: formData.get('title')?.toString() || '',
			notes: formData.get('notes')?.toString() || '',
		};

		// console.log('creating note', note);

		await createClinicNote(note);

		return { success: true };
	}
};
