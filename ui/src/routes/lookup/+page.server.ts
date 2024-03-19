import { getPatientRecords } from '$lib/server/db';

export async function load() {
	const data = await getPatientRecords();

	return {
		records: data
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
			natID: formData.get('natID')?.toString() || ''
		};

		// await updatePatientRecord(record);

		return { success: true };
	}
};
