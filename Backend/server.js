const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const multer  = require('multer')

dotenv.config({path:'./config/config.env'});



//Route files

const app = express();
app.use(cors())

// app.use('/api/v1/mileagecar',mileagecar);
// app.use('/api/v1/Advance',Advance);

const upload = multer({ dest: 'uploads/' });



const PORT = process.env.PORT || 5000
const server = app.listen(PORT,console.log('Server running in ', process.env.NODE_ENV , ' mode on port' , PORT));
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error:${err.message}`);
    server.close(()=>process.exit(1));
});