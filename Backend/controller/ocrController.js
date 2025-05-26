const Tesseract = require('tesseract.js');
const path = require('path');


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



module.exports = handleOCR;
