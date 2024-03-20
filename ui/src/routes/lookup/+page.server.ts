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

		const personalIdentifier: Omit<PatientRecord, 'id'> = {
			name: formData.get('name')?.toString() || '',
			day_of_birth: formData.get('day_of_birth')?.toString() || '1',
			month_of_birth: formData.get('month_of_birth')?.toString() || '1',
			year_of_birth: formData.get('year_of_birth')?.toString() || '2024',
			sex: formData.get('sex')?.toString() || '',
			phone: formData.get('phone')?.toString() || '',
			village: formData.get('village')?.toString() || '',
			natID: formData.get('natID')?.toString() || ''
		};

		// const voiceForm = new FormData();
		// voiceForm.append('file', formData.get('voiceBlob') as Blob, formData.get('voiceSrc')?.toString() || '');
		// const response = await fetch('http://127.0.0.1:8000/speaker-recognition', {
		// 	method: 'POST',
		// 	body: voiceForm,
		// 	cache: 'no-cache'
		// });
		// console.log(response);

		const response = await filterPatients(personalIdentifier);

		return {
			records: response,
			success: true
		};
	}
	// voice: async ({ request }) => {
	// 	const formData = await request.formData();

	// 	for (let pair of formData.entries()) {
	// 		console.log(pair[0]+ ', ' + pair[1]);
	// 	  }

	// 	const voiceForm = new FormData();
	// 	const audioBlob = new Blob([voiceForm.get('voiceBlob')], { type: 'audio/wav' });
	// 	const voiceSrc = formData.get('voiceSrc')?.toString() || '';
	// 	voiceForm.append('file', audioBlob, voiceSrc);
	// 	const response = await fetch('http://127.0.0.1:8000/speaker-recognition', {
	// 		method: 'POST',
	// 		body: voiceForm,
	// 		cache: 'no-cache',
	// 	}).then(res => console.log(res.json())).catch(err => console.error(err));

	// 	// console.log(response.message)
	// }
};
