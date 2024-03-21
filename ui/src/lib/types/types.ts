export interface PatientRecord {
	id: string;
	name: string;
	day_of_birth: string;
	month_of_birth: string;
	year_of_birth: string;
	sex: string;
	phone: string;
	village: string;
	natID: string;
	photo_file_path: string;
}

export interface ClinicNotes {
	id: string;
	patient_id: string;
	title: string;
	date: Date;
	notes: string;
}

export interface PatientOverview {
	current_medication: string;
	allergies: string;
	conditions: string;
}
