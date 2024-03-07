import { getPatientRecord } from '$lib/server/db';
import { updatePatientRecord } from '$lib/server/db';
import { fail } from '@sveltejs/kit';
import type { PatientRecord } from '../../../lib/types/PatientRecord.js';

export async function load({ params }) {
	const record = await getPatientRecord(params.id);

	return {
		record
	};
}

export const actions = {
	createPatient: async ({ request }) => {
		const formData = await request.formData();
    console.log(formData);

		// if (!formData || !formData.has('id') || !formData.has('name') || !formData.has('dob')) {
		// 	return fail(400, { message: 'Missing required fields' });
		// }

		if (!formData.get('id')?.toString()) {
			return fail(400, { message: 'Missing required fields' });
		}

		const record: PatientRecord = {
			id: formData.get('id')?.toString() ?? '',
			name: formData.get('name')?.toString() || '',
			dob: formData.get('dob')?.toString() || '',
			sex: formData.get('sex')?.toString() || '',
			phone: formData.get('phone')?.toString() || '',
			village: formData.get('village')?.toString() || ''
		};
    console.log(record);

		await updatePatientRecord(record);

		return { success: true };
	}
};
