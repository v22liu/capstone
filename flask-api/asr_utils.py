import glob
from pydub import AudioSegment
import os
import nemo.collections.asr.models as nemo_asr_models

def convert_audio_file(input_file, output_file):
    # Load the audio file
    audio = AudioSegment.from_file(input_file)

    # Set the desired sample rate and channels
    target_sample_rate = 16000
    target_channels = 1

    # Resample and set channels
    audio = audio.set_frame_rate(target_sample_rate).set_channels(target_channels)

    # Export the result as WAV
    audio.export(output_file, format="wav")

"""
Speaker Verification to verify the audio files  

Input: 
- audio files should be 16KHz mono channel wav files

Output:
- True if two provided audio files are from the same speaker 
- False otherwise
"""
def speaker_recognition(file_path_1, file_path_2):
	speaker_model = nemo_asr_models.EncDecSpeakerLabelModel.from_pretrained(model_name='titanet_large')
	decision = speaker_model.verify_speakers(file_path_1, file_path_2)
	return decision

# TODO: add function for cleaning audio files (remove noise, etc.)

# TODO: add function for speech-to-text

