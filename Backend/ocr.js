
import { createWorker } from 'tesseract.js';
import path from 'path';

export async function performOCR(filePath) {
  const worker = await createWorker();

  try {
    await worker.load();
    await worker.loadLanguage('eng+tha');
    await worker.initialize('eng+tha');

    const {
      data: { text },
    } = await worker.recognize(path.resolve(filePath));

    await worker.terminate();
    return text;
  } catch (err) {
    await worker.terminate();
    throw new Error('OCR failed: ' + err.message);
  }
}
