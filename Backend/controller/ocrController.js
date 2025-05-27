import Tesseract from 'tesseract.js';
import path from 'path';
import { performOCR } from '../ocr.js';


export const handleOCR = async (req, res) => {

    //handle no file upload
  if (!req.file) return res.status(400).send('No picture or file uploaded.');

  try {

    //handle OCR (Process the Image)
     const text = await performOCR(req.file.path);
    //extract text answer to json response
    res.json({ text });

  } catch (error) {
    res.status(500).json({ error: 'OCR failed' });
  }
};




