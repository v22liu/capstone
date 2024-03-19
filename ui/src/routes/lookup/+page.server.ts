import { getPatientRecords, filterPatients } from '$lib/server/db';
import type { PatientRecord } from '$lib/types/types.js';

export async function load() {
	const data = await getPatientRecords();

	return {
		records: data
	};
}

export const actions = {
	patient: async ({ request }) => {
		const formData = await request.formData();

		const record: Omit<PatientRecord, 'id'> = {
			name: formData.get('name')?.toString() || '',
			day_of_birth: formData.get('day_of_birth')?.toString() || '1',
			month_of_birth: formData.get('month_of_birth')?.toString() || '1',
			year_of_birth: formData.get('year_of_birth')?.toString() || '2024',
			sex: formData.get('sex')?.toString() || '',
			phone: formData.get('phone')?.toString() || '',
			village: formData.get('village')?.toString() || '',
			natID: formData.get('natID')?.toString() || ''
		};

		const response = await filterPatients(record);

		return {
			records: response,
			success: true,
		};
	}
};
