import { createRecord, getPatientRecords } from '$lib/server/db';
import { fail } from '@sveltejs/kit';
import type { PatientRecord } from '../../types/PatientRecord.js';

export const actions = {
	createPatient: async ({ request }) => {
		const formData = await request.formData();

		// if (!formData || !formData.has('id') || !formData.has('name') || !formData.has('dob')) {
		// 	return fail(400, { message: 'Missing required fields' });
		// }

		const record: PatientRecord = {
			id: formData.get('id')?.toString() || '',
			name: formData.get('name')?.toString() || '',
			dob: formData.get('dob')?.toString() || '',
			sex: formData.get('sex')?.toString() || '',
			phone: formData.get('phone')?.toString() || '',
			village: formData.get('village')?.toString() || ''
		};

		await createRecord(record);

		return { success: true };
	}
};
