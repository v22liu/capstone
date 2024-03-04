import type { PatientRecord } from "../../types/PatientRecord"

const db = new Map()

export async function createRecord(record: PatientRecord) {
  db.set(record.id, record)
}

export async function getPatientRecords() {
  return Array.from(db.values())
}

export async function deletePatientRecord(id: string) {
  db.delete(id)
}

export async function updatePatientRecord(record: PatientRecord) {
	db.set(record.id, record);
}