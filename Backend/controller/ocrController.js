const Tesseract = require('tesseract.js');
const path = require('path');
const { createWorker } = require('tesseract.js');

const handleOCR = async (req, res) => {

    //handle no file upload
  if (!req.file) return res.status(400).send('No picture or file uploaded.');

  try {

    //handle OCR (Process the Image)
    const { data: { text } } = await Tesseract.recognize(

        // Full path to the uploaded file
      path.resolve(req.file.path),
        'eng+tha'
    );

    //extract text answer to json response
    res.json({ text });

  } catch (error) {
    res.status(500).json({ error: 'OCR failed' });
  }
};


//automic download language from internet
const worker = createWorker();

await worker.load();
await worker.loadLanguage('eng+tha');
await worker.initialize('eng+tha');

const { data: { text } } = await worker.recognize(req.file.path);
await worker.terminate();


module.exports = { handleOCR };
