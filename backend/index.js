const express = require('express');
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//Port 
const PORT = process.env.PORT || 5500;


const db=require('./config/mongoose');


//use cors
app.use(cors());



//import routes
app.use('/', require('./routes'));



//connect to server
app.listen(PORT, ()=> console.log(`Server connected on ${PORT}`) );