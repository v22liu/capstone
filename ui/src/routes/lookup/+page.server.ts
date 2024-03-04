import { getPatientRecords } from "$lib/server/db";

export async function load() {
  const data = await getPatientRecords();

  return {
    records: data
  }
}