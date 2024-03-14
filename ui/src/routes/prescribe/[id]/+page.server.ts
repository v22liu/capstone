import { getPatientRecord, updatePatientRecord } from '$lib/server/db';
import { fail } from '@sveltejs/kit';
import type { PatientRecord } from '../../../lib/types/types.js';

export async function load({ params }) {
	const record = await getPatientRecord(params.id);

	return {
		record
	};
}
