import { getPatientRecord } from "$lib/server/db";

export async function load({ params }) {
  const record = await getPatientRecord(params.id);

  return {
    record
  }
}