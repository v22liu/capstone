from flask import Flask, request
from flask_restful import Api, Resource
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import asr_utils
import os
from datetime import datetime

app = Flask(__name__)
CORS(app, origins="*")
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../../db/database.sqlite'
db = SQLAlchemy(app)

## Database Models
class Patient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    day_of_birth = db.Column(db.Integer)
    month_of_birth = db.Column(db.Integer)
    year_of_birth = db.Column(db.Integer)
    sex = db.Column(db.String(10))
    phone = db.Column(db.String(20))
    village = db.Column(db.String(255))
    natID = db.Column(db.String(20))
    photo_thumbnail = db.Column(db.BLOB)  # Small image thumbnail stored in the database
    voice_clip = db.Column(db.BLOB)  # Short voice clip stored in the database
    photo_file_path = db.Column(db.String(255))  # File path to the high-resolution photo stored externally
    voice_recording_path = db.Column(db.String(255))  # File path to the longer voice recording stored externally
    current_medication = db.Column(db.String(255))
    allergies = db.Column(db.String(255))
    conditions = db.Column(db.String(255))

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'day_of_birth': self.day_of_birth,
            'month_of_birth': self.month_of_birth,
            'year_of_birth': self.year_of_birth,
            'sex': self.sex,
            'phone': self.phone,
            'village': self.village,
            'natID': self.natID,
            'photo_thumbnail': self.photo_thumbnail,
            'voice_clip': self.voice_clip,
            'photo_file_path': self.photo_file_path,
            'voice_recording_path': self.voice_recording_path,
            'current_medication': self.current_medication,
            'allergies': self.allergies,
            'conditions': self.conditions
        }
    
    def serialize_overview(self):
        return {
            'id': self.id,
            'current_medication': self.current_medication,
            'allergies': self.allergies,
            'conditions': self.conditions
        }
    

class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient.id'), nullable=False)
    title = db.Column(db.String(255))
    date = db.Column(db.Date)
    notes = db.Column(db.Text)

    def serialize(self):
        return {
            'id': self.id,
            'patient_id': self.patient_id,
            'title': self.title,
            'date': self.date.strftime('%Y-%m-%d'),
            'notes': self.notes
        }


## API Resources
class PatientResource(Resource):
    def get(self):
        patients = Patient.query.all()
        return [patient.serialize() for patient in patients]
        
    def post(self):
        json_data = request.get_json()

        patient = Patient(
            name=json_data.get('name'),
            day_of_birth=json_data.get('day_of_birth'),
            month_of_birth=json_data.get('month_of_birth'),
            year_of_birth=json_data.get('year_of_birth'),
            sex=json_data.get('sex'),
            phone=json_data.get('phone'),
            village=json_data.get('village'),
            natID=json_data.get('natID'),
            photo_thumbnail=json_data.get('photo_thumbnail'),
            voice_clip=json_data.get('voice_clip'),
            photo_file_path=json_data.get('photo_file_path'),
            voice_recording_path=json_data.get('voice_recording_path')
        )

        db.session.add(patient)
        db.session.commit()

        return {'message': 'Patient record created successfully'}, 201     

class PatientByIdResource(Resource):
    def get(self, patient_id):
        patient = Patient.query.get(patient_id)
        if patient:
            return patient.serialize()
        else:
            return {'message': 'Patient not found'}, 404

    def put(self, patient_id):
        patient = Patient.query.get(patient_id)
        if patient:
            json_data = request.get_json()

            patient.name = json_data.get('name')
            patient.day_of_birth = json_data.get('day_of_birth')
            patient.month_of_birth = json_data.get('month_of_birth')
            patient.year_of_birth = json_data.get('year_of_birth')
            patient.sex = json_data.get('sex')
            patient.phone = json_data.get('phone')
            patient.village = json_data.get('village')
            patient.natID = json_data.get('natID')
            patient.photo_thumbnail = json_data.get('photo_thumbnail')
            patient.voice_clip = json_data.get('voice_clip')
            patient.photo_file_path = json_data.get('photo_file_path')
            patient.voice_recording_path = json_data.get('voice_recording_path')

            db.session.commit()
            return {'message': 'Patient record updated successfully'}
        else:
            return {'message': 'Patient not found'}, 404

class PatientByIdentifierResource(Resource):
    def post(self):
        json_data = request.get_json()
        name = json_data.get('name')
        sex = json_data.get('sex')
        village = json_data.get('village')
        phone = json_data.get('phone')
        natID = json_data.get('natID')
        day_of_birth = json_data.get('day_of_birth')
        month_of_birth = json_data.get('month_of_birth')
        year_of_birth = json_data.get('year_of_birth')
        patients = Patient.query.filter(
            ((Patient.name.contains(name)) & (name != '')) | 
            ((Patient.phone.contains(phone)) & (phone != '')) | 
            ((Patient.natID.contains(natID)) & (natID != '')) |
            ((Patient.sex == sex) & (sex != '')) |
            ((Patient.village == village) & (village != '')) |
            ((Patient.day_of_birth == day_of_birth) & (day_of_birth != '')) |
            ((Patient.month_of_birth == month_of_birth) & (month_of_birth != '')) |
            ((Patient.year_of_birth == year_of_birth) & (year_of_birth != ''))
        ).all()
        if patients:
            print(patients)
            return [patient.serialize() for patient in patients]
        else:
            print('No patients found')
            return []

class NoteResource(Resource):
    def get(self):
        patient_filter = request.args.get('patient_id')
        if patient_filter:
            notes = Note.query.filter_by(patient_id=patient_filter).all()
            if not notes:
                return []
            return [note.serialize() for note in notes]
        else:
            return []

    def post(self):
        json_data = request.get_json()

        note = Note(
            patient_id=json_data.get('patient_id'),
            title=json_data.get('title'),
            date=datetime.now().date(),
            notes=json_data.get('notes')
        )

        db.session.add(note)
        db.session.commit()

        return {'message': 'Clinic note created successfully'}, 201

class NoteByIdResource(Resource):
    def get(self, note_id):
        note = Note.query.get(note_id)
        if note:
            return note.serialize()
        else:
            return {'message': 'Clinic note not found'}, 404

    def put(self, note_id):
        note = Note.query.get(note_id)
        if note:
            json_data = request.get_json()

            note.title = json_data.get('title')
            note.date = json_data.get('date')
            note.notes = json_data.get('notes')

            db.session.commit()
            return {'message': 'Clinic note updated successfully'}
        else:
            return {'message': 'Clinic note not found'}, 404

class PatientOverviewByIdResource(Resource):
    def get(self, patient_id):
        # patient_overview = PatientOverview.query.filter_by(patient_id=patient_id).first()
        patient_overview = Patient.query.get(patient_id)
        if patient_overview:
            return patient_overview.serialize_overview()
        else:
            return {'message': 'Patient overview not found'}, 404

    def put(self, patient_id):
        # patient_overview = PatientOverview.query.filter_by(patient_id=patient_id)
        patient_overview = Patient.query.get(patient_id)
        if patient_overview:
            json_data = request.get_json()

            patient_overview.current_medication = json_data.get('current_medication')
            patient_overview.allergies = json_data.get('allergies')
            patient_overview.conditions = json_data.get('conditions')

            db.session.commit()
            return {'message': 'Patient overview updated successfully'}
        else:
            return {'message': 'Patient overview not found'}, 404

class SpeakerRecognition(Resource):    
    """
    Matching between an input audio file and all patients' voice recordings
    """
    def post(self):
        files = request.files
        file = files.get('file')
        print('files', files)
        if not file:
            print('No file uploaded')
            return {'message': 'No file uploaded'}, 400

        try:
            file_path = asr_utils.write_audio_to_file(file)
        except Exception as e:
            return {'message': 'An error occurred with saving audio to file: ' + str(e)}, 500
        print('Audio file saved successfully')

        patients = Patient.query.all()
        matching_patients = []
        for patient in patients:
            # patient's saved voice clip should already be in correct audio format
            voice_clip_path = os.path.join('./assets/audio', patient.voice_recording_path)
            if not voice_clip_path:
                continue

            try:
                isMatch = asr_utils.speaker_recognition(file_path, voice_clip_path)
                print('isMatch:', isMatch)
            except Exception as e:
                return {'message': 'An error occurred with audio conversion or speaker model: ' + str(e)}, 500

            if isMatch == True:
                matching_patients.append(patient.serialize())
        return {'matching_patients': matching_patients}


api.add_resource(PatientResource, '/patients')
api.add_resource(PatientByIdentifierResource, '/patients-by-identifier')
api.add_resource(PatientByIdResource, '/patients/<int:patient_id>')
api.add_resource(NoteResource, '/notes')
api.add_resource(NoteByIdResource, '/notes/<int:note_id>')
api.add_resource(PatientOverviewByIdResource, '/patient-overview/<int:patient_id>')

api.add_resource(SpeakerRecognition, '/speaker-recognition')

if __name__ == '__main__':
    app.run(port=8000, debug=True)