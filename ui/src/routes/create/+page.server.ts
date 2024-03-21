import { createRecord } from '$lib/server/db';
import type { PatientRecord } from '../../lib/types/types.js';

export const actions = {
	patient: async ({ request }) => {
		const formData = await request.formData();

		// if (!formData || !formData.has('id') || !formData.has('name') || !formData.has('dob')) {
		// 	return fail(400, { message: 'Missing required fields' });
		// }

		const record: Omit<PatientRecord, 'id'> = {
			name: formData.get('name')?.toString() || '',
			day_of_birth: formData.get('day_of_birth')?.toString() || '1',
			month_of_birth: formData.get('month_of_birth')?.toString() || '1',
			year_of_birth: formData.get('year_of_birth')?.toString() || '2024',
			sex: formData.get('sex')?.toString() || '',
			phone: formData.get('phone')?.toString() || '',
			village: formData.get('village')?.toString() || '',
			natID: formData.get('natID')?.toString() || '',
			photo_file_path: formData.get('photo_file_path')?.toString() || ''
		};

		const response = await createRecord(record);

		return { id: response.id, success: true };
	}
};
