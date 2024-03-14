import { getPatientRecords } from "$lib/server/db";
import fs from 'fs';

export async function load() {
  const data = await getPatientRecords();

  return {
    records: data
  }
}

function createAudioFile(folderPath: string, fileName: string, audioData: ArrayBuffer) {
  const filePath = `${folderPath}/${fileName}.mp3`;

  fs.writeFile(filePath, Buffer.from(audioData), (err) => {
    if (err) {
      console.error('Error creating audio file:', err);
    } else {
      console.log('Audio file created successfully!');
    }
  });
}

// Usage example:
const folderPath = '/path/to/folder';
const fileName = 'audio';
const audioData = new ArrayBuffer(1024); // Replace with your actual audio data

createAudioFile(folderPath, fileName, audioData);
