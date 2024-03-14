import glob
import subprocess
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

def convert_volunteer_files():
  NEMO_ROOT = os.getcwd()
  data_dir = os.path.join(NEMO_ROOT,'data/volunteer_files_wav')
  os.makedirs(data_dir, exist_ok=True)

  # Get the path to the folder containing the audio files
  audio_folder_path = './data/volunteer_files'

  # Get a list of all the audio files in the folder
  audio_files = glob.glob(audio_folder_path + '/*')

  # Read each audio file
  for audio_file_path in audio_files:
    file_name = audio_file_path[len(audio_folder_path):]
    print('Converting: ' + file_name)
    wav_path = data_dir + file_name[:-4] + '.wav'
    convert_audio_file(audio_file_path, wav_path)

  print("Finished conversion.\n******")

# convert_volunteer_files()

def speaker_recognition(input_file_path, output_file_path):
  speaker_model = nemo_asr_models.EncDecSpeakerLabelModel.from_pretrained(model_name='titanet_large')
  decision = speaker_model.verify_speakers(input_file_path, output_file_path)
  print(decision)

speaker_recognition('./data/volunteer_files_wav/Steve.wav','./data/volunteer_files_wav/Emmanual.wav')