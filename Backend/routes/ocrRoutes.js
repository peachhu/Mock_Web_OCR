const express = require('express')
const multer = require('multer');
const handleOCR = require('../controller/ocrController');

const router = express.Router();
//the file uploaded will be  temporarily stoed in folder uploads

const upload = multer({dest: 'uploads/'})

router.post('/ocr', upload.single('image'),handleOCR);


module.exports = router;