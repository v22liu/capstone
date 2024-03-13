from flask import Flask
from flask_restful import Api, Resource
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../../db/database.sqlite'
db = SQLAlchemy(app)

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
            'voice_recording_path': self.voice_recording_path
        }

class PatientResources(Resource):
    def get(self):
        patients = Patient.query.all()
        return [patient.serialize() for patient in patients]

api.add_resource(PatientResources, '/patients')

if __name__ == '__main__':
    app.run(debug=True)