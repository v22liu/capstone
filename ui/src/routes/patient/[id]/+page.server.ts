import { getPatientRecord, updatePatientRecord } from '$lib/server/db';
import { fail } from '@sveltejs/kit';
import type { PatientRecord } from '$lib/types/PatientRecord.js';

export async function load({ params }) {
	const record = await getPatientRecord(params.id);

	return {
		record
	};
}

export const actions = {
	createPatient: async ({ request }) => {
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
			natID: formData.get('natID')?.toString() || ''
		};

		await updatePatientRecord(record);

		return { success: true };
	}
};
