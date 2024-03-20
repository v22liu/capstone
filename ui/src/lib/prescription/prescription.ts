export const PrescriptionReason = {
	Worms: 'Minyoo',
	Infection: 'Ambukizo',
	Stomach: 'Tumbo',
	Pressure: 'Presha',
	Heart: 'Moyo',
	'Skin Irritation': 'Kuwashwa ya ngozi',
	Constipation: 'Kuvimbiwa',
	Allergies: 'Aleji',
	Asthma: 'Pumu',
	'Mental Health': 'Ugonjwa wa ubongo',
	Vagina: 'Sehemu ya siri',
	Cough: 'Kikohozi',
	'Skin Infection': 'Ambukizo ya ngozi',
	Pain: 'Maumivu',
	'Iron and Vitamins': 'Chuma na Vitamini',
	Hemorrhoids: 'Mjiko',
	Diabetes: 'Kisukari',
	'Throat or Teeth': 'Matatizo ya koo au meno',
	Fever: 'Homa',
	Diarrhea: 'Kuhara'
};

export const Dosages = [
	'5mg',
	'10mg',
	'25mg',
	'50mg',
	'100mg',
	'125mg/5mL',
	'150mg',
	'200mg',
	'200mg X 10 Tab.',
	'250mg',
	'400mg',
	'500mg',
	'1%'
];

export const PrescriptionWarnings = {
	'Chew Tablets': 'Tafuna Zote',
	'Do Not Take While Pregnant': 'Si Wakati Wa Ujauzito',
	'After Eating': 'Baaba Ya Kula',
	'Stay Close to Toilet': 'Kufunga Choo',
	'Insert Into Rectum': 'Weka Kidonge Kwenye Mjiko',
	'Insert Into Vagina': 'Sehemu Ya Siri',
	'Drink Water': 'Kunywa Maji Mengi',
	'Do Not Drink Alcohol': 'Usinuwe Pombe',
	'Take With Meals': 'Kwa Ya Chakula'
};

export const PrescriptionTimings = {
	'As Needed': 'Inapo Hitajika',
	Morning: 'Asubuhi',
	'Before Bed': 'Katika Usiku'
};

export const Medications = [
	'Albendazole',
	'Albendazole/Mebendazole Liquid',
	'Aminophylline',
	'Amitriptyline',
	'Amoxicillin Liquid',
	'Amoxicillin Tab',
	'Anusol Suppositories',
	'Atenolol',
	'Betamethasone Cream',
	'Bendroflumethiazide',
	'Bisacodyl',
	'Captopril',
	'Cefixime',
	'Cipro',
	'Cetirizine',
	'Clotrimazole Vag. Tab.',
	'Clotrimazole Cream',
	'Co-trimoxazole Liquid (Septrin)',
	'Co-trimoxazole SS Tablets (Septrin)',
	'Cough Syrup',
	'Diclofenac Gel',
	'Diclofenac Tab',
	'Doxycycline',
	'Ferrous Sulfate & Folic Acid',
	'Folic Acid',
	'Fluconazole',
	'Griseofulvin',
	'Hydrocortisone Cream',
	'Ibuprofen',
	'Magnesium',
	'Metformin',
	'Metronidazole',
	'Multivitamin',
	'Nifedipine',
	'Omeprazole',
	'Paracetamol Tab',
	'Paracetamol Liquid',
	'Praziquantel',
	'Penicillin V',
	'Polybamycin Ointment',
	'Ranitidine',
	'Salbutamol',
	'Salbutamol Inhaler',
	'Vitamin B complex Liquid',
	'Vitamin B complex Tab',
	'Whitfield’s Ointment',
	'Zinc'
];

export const Villages = [
	null,
	'Arusha',
	'Bagamoyo',
	'Bukoba',
	'Dar es Salaam',
	'Dodoma',
	'Iringa',
	'Kahama',
	'Kigoma',
	'Kilwa Kisiwani',
	'Kijiji cha Makumbusho',
	'Lindi',
	'Lushoto',
	'Mbeya',
	'Moshi',
	'Morogoro',
	'Mto wa Mbu',
	'Mwanza',
	'Ngorongoro',
	'Pangani',
	'Songea',
	'Tabora',
	'Tanga',
	'Tunduma',
	'Ujiji',
	'Zanzibar'
];

export const DefaultDrugSettings = {
	Albendazole: {
		dosage: '200mg',
		bin: '2',
		reason: 'Worms',
		count: '2',
		type: 'pill',
		frequency: '1',
		usagePeriod: '1',
		timeOfDay: null,
		warnings: ['Chew Tablets', 'Do Not Take While Pregnant']
	},

	'Amoxicillin Liquid': {
		dosage: '125mg/5mL',
		bin: null,
		reason: 'Infection',
		count: null,
		type: 'liquid',
		frequency: null,
		usagePeriod: null,
		timeOfDay: null,
		warnings: null
	},

	'Amoxicillin Tab': {
		dosage: '250mg',
		bin: '42',
		reason: 'Stomach',
		count: '3',
		type: 'pill',
		frequency: '2',
		usagePeriod: '7',
		timeOfDay: null,
		warnings: ['After Eating']
	},

	Atenolol: {
		dosage: '50mg',
		bin: '30',
		reason: 'Heart',
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: '30',
		timeOfDay: null,
		warnings: null
	},

	Bendroflumethiazide: {
		dosage: '5mg',
		bin: '15',
		reason: 'Pressure',
		// count: '0.5', // is this a problem
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: '30',
		timeOfDay: 'Morning',
		warnings: null
	},

	'Betamethasone Cream': {
		dosage: null,
		bin: null,
		reason: 'Skin Irritation',
		count: null,
		type: 'cream',
		frequency: '2',
		usagePeriod: null,
		timeOfDay: null,
		warnings: null
	},

	Bisacodyl: {
		dosage: '5mg',
		bin: '10',
		reason: 'Constipation',
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: '10',
		timeOfDay: 'As Needed',
		warnings: ['Stay Close to Toilet', 'Drink Water']
	},

	Captopril: {
		dosage: '25mg',
		bin: '90',
		reason: 'Pressure',
		count: '1',
		type: 'pill',
		frequency: '3',
		usagePeriod: '30',
		timeOfDay: null,
		warnings: null
	},

	Cetirizine: {
		dosage: '10mg',
		bin: '10',
		reason: 'Allergies',
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: '10',
		timeOfDay: 'As Needed',
		warnings: null
	},

	Aminophylline: {
		dosage: '100mg',
		bin: '30',
		reason: 'Asthma',
		count: '1',
		type: 'inhaler',
		frequency: '3',
		usagePeriod: '10',
		timeOfDay: 'As Needed',
		warnings: null
	},

	Amitriptyline: {
		dosage: '25mg',
		reason: 'Mental Health',
		bin: '30',
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: null,
		timeOfDay: 'Before Bed',
		warnings: null
	},

	'Clotrimazole Vag.Tab.': {
		dosage: '100mg',
		bin: '6',
		reason: 'Vagina',
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: '6',
		timeOfDay: 'Before Bed',
		warnings: ['Insert Into Vagina']
	},

	'Clotrimazole Cream': {
		dosage: '1%',
		bin: null,
		reason: 'Skin Irritation',
		count: null,
		type: 'cream',
		frequency: '2',
		usagePeriod: '10',
		timeOfDay: null,
		warnings: null
	},

	'Co-trimoxazole Liquid (Septrin)': {
		dosage: null,
		bin: null,
		reason: 'Infection',
		count: null,
		type: 'liquid',
		frequency: null,
		usagePeriod: null,
		timeOfDay: null,
		warnings: null
	},

	'Co-trimoxazole SS Tab. (Septrin)': {
		dosage: null,
		bin: null,
		reason: 'Infection',
		count: '2',
		type: 'pill',
		frequency: '2',
		usagePeriod: null,
		timeOfDay: null,
		warnings: ['Drink Water']
	},

	'Cough Syrup': {
		dosage: null,
		bin: null,
		reason: '',
		count: null,
		type: 'liquid',
		frequency: '3',
		usagePeriod: null,
		timeOfDay: 'As Needed',
		warnings: null
	},

	'Whitfield’s Ointment': {
		dosage: null,
		bin: null,
		reason: 'Skin Infection',
		count: null,
		frequency: '2',
		usagePeriod: '14',
		timeOfDay: null,
		warnings: null
	},

	'Diclofenac Tab.': {
		dosage: '50mg',
		bin: '20',
		reason: 'Pain',
		count: '1',
		type: 'pill',
		frequency: '2',
		usagePeriod: '',
		timeOfDay: 'As Needed',
		warnings: ['After Eating']
	},

	'Diclofenac Gel': {
		dosage: null,
		reason: 'Pain',
		count: null,
		frequency: '3',
		usagePeriod: null,
		timeOfDay: 'As Needed',
		warnings: null
	},

	Ranitidine: {
		dosage: '150mg',
		bin: '15',
		reason: 'Stomach',
		count: '1',
		type: 'pill',
		frequency: '2',
		usagePeriod: null,
		timeOfDay: 'As Needed',
		warnings: null
	},

	Omeprazole: {
		dosage: '20mg',
		bin: '30',
		reason: 'Stomach',
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: '30',
		timeOfDay: null,
		warnings: null
	},

	'Ferrous Sulfate & Folic Acid': {
		dosage: null,
		bin: null,
		reason: 'Iron and Vitamins',
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: '30',
		timeOfDay: null,
		warnings: null
	},

	Fluconazole: {
		dosage: '150mg',
		bin: null,
		reason: 'Infection',
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: null,
		timeOfDay: null,
		warnings: null
	},

	'Albendazole/Mebendazole Liquid': {
		dosage: null,
		bin: null,
		reason: 'Worms',
		count: '1',
		type: 'liquid',
		frequency: '1',
		usagePeriod: '1',
		timeOfDay: null,
		warnings: null
	},

	'Hydrocortisone Cream': {
		dosage: '1%',
		bin: null,
		reason: 'Skin Irritation',
		count: null,
		frequency: '2',
		usagePeriod: '10',
		timeOfDay: null,
		warnings: null
	},

	Ibuprofen: {
		dosage: '200mg',
		bin: '30',
		reason: 'Pain',
		count: '1',
		type: 'pill',
		frequency: '3',
		usagePeriod: null,
		timeOfDay: 'As Needed',
		warnings: ['After Eating']
	},

	Magnesium: {
		dosage: null,
		bin: null,
		reason: 'Stomach',
		count: '2',
		type: 'pill',
		frequency: '3',
		usagePeriod: null,
		timeOfDay: 'As Needed',
		warnings: null
	},

	Metformin: {
		dosage: '500mg',
		bin: '100',
		reason: 'Diabetes',
		count: '1',
		type: 'pill',
		frequency: '2',
		usagePeriod: '50',
		timeOfDay: null,
		warnings: ['After Eating']
	},

	Metronidazole: {
		dosage: '200mg', //"200mgX10Tab."
		bin: '42',
		reason: 'Stomach',
		count: '3',
		type: 'pill',
		frequency: '2',
		usagePeriod: '7',
		timeOfDay: null,
		warnings: ['Do Not Drink Alcohol']
	},

	'Salbutamol Inhaler': {
		dosage: null,
		bin: null,
		reason: 'Asthma',
		count: '2',
		type: 'inhaler',
		frequency: '4',
		usagePeriod: null,
		timeOfDay: 'As Needed',
		warnings: null
	},
	Multivitamin: {
		dosage: null,
		bin: null,
		reason: 'Iron and Vitamins',
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: '30',
		timeOfDay: null,
		warnings: null
	},
	Nifedipine: {
		dosage: '20mg',
		bin: '60',
		reason: 'Pressure',
		count: '1',
		type: 'pill',
		frequency: '2',
		usagePeriod: '30',
		timeOfDay: null,
		warnings: null
	},
	'Penicillin V': {
		dosage: '250mg',
		bin: null,
		reason: 'Throat or Teeth',
		count: '2',
		type: 'pill',
		frequency: '3',
		usagePeriod: '5',
		timeOfDay: null,
		warnings: null
	},
	'Paracetamol Tab': {
		dosage: '500mg',
		bin: '20',
		reason: 'Fever',
		count: '1',
		type: 'pill',
		frequency: '3',
		usagePeriod: null,
		timeOfDay: 'As Needed',
		warnings: null
	},

	'Paracetamol Liquid': {
		dosage: '120mg/5mL',
		bin: null,
		reason: 'Fever',
		count: null,
		type: 'liquid',
		frequency: '3',
		usagePeriod: null,
		timeOfDay: 'As Needed',
		warnings: null
	},
	Praziquantel: {
		dosage: '600mg',
		bin: null,
		reason: 'Worms',
		count: null,
		type: 'pill',
		frequency: '1',
		usagePeriod: 1,
		timeOfDay: null,
		warnings: null
	},
	'Vitamin B complex Tab': {
		dosage: null,
		bin: '30',
		reason: 'Iron and Vitamins',
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: '30',
		timeOfDay: null,
		warnings: null
	},
	'Vitamin B complex Liquid': {
		dosage: null,
		bin: '30',
		reason: 'Iron and Vitamins',
		count: null,
		type: 'liquid',
		frequency: '1',
		usagePeriod: null,
		timeOfDay: null,
		warnings: null
	},
	Salbutamol: {
		dosage: '4mg',
		bin: '30',
		reason: 'Asthma',
		count: '1',
		type: 'pill',
		frequency: '3',
		usagePeriod: '10',
		timeOfDay: 'As Needed',
		warnings: null
	},
	Griseofulvin: {
		dosage: '500mg',
		bin: null,
		reason: 'Skin Infection',
		count: null,
		type: 'pill',
		frequency: '1',
		usagePeriod: '28',
		timeOfDay: null,
		warnings: ['Do Not Take While Pregnant', 'Do Not Drink Alcohol']
	},
	'Anusol Suppositories': {
		dosage: null,
		bin: '10',
		reason: 'Hemmeroids',
		count: '1',
		type: 'pill',
		frequency: '2',
		usagePeriod: null,
		timeOfDay: 'As Needed',
		warnings: null
	},
	Zinc: {
		dosage: '20mg',
		bin: '10',
		reason: 'Diarrhea',
		count: '1',
		type: 'pill',
		frequency: '1',
		usagePeriod: '10',
		timeOfDay: null,
		warnings: null
	},
	Doxycycline: {
		dosage: '100mg',
		bin: '14',
		reason: 'Infection',
		count: '1',
		type: 'pill',
		frequency: '2',
		usagePeriod: '7',
		timeOfDay: null,
		warnings: ['Do Not Drink Alcohol']
	},
	'Polybamycin Ointment': {
		dosage: null,
		bin: null,
		reason: 'Skin Infection',
		count: null,
		type: 'cream',
		frequency: '3',
		usagePeriod: '7',
		timeOfDay: 'As Needed',
		warnings: null
	},
	'Folic Acid': {
		dosage: '5mg',
		bin: '30',
		reason: 'Iron and Vitamins',
		count: '0.5',
		type: 'pill',
		frequency: '1',
		usagePeriod: '60',
		timeOfDay: null,
		warnings: null
	},
	Cipro: {
		dosage: '500mg',
		bin: null,
		reason: 'Infection',
		count: null,
		type: 'pill',
		frequency: null,
		usaage_period: null,
		timeOfDay: null,
		warnings: null
	},
	Cefixime: {
		dosage: '200mg',
		bin: '2',
		reason: 'Infection',
		count: '2',
		type: 'pill',
		frequency: '1',
		usagePeriod: '1',
		timeOfDay: null,
		warnings: null
	}
};
