import express from 'express';
import multer from 'multer';
import { handleOCR} from '../controller/ocrController.js';

const router = express.Router();
//the file uploaded will be  temporarily stoed in folder uploads

const upload = multer({dest: 'uploads/'})

router.post('/ocr', upload.single('image'), handleOCR);


export default router;