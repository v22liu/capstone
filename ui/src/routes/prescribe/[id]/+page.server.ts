import { getPatientRecord, getPatientOverview, getClinicNotes } from '$lib/server/db';

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
