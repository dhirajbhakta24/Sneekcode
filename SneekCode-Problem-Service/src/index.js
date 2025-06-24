const express = require('express');

const bodyParser = require('body-parser');

const {PORT,NODE_ENV} = require('./config/server.config');

const apiRouter = require('./routes');
const errorHandler = require('./utils/errorhandler');
const connectToDB = require('./config/db.config');
const mongoose = require('mongoose');
const Problem = require('./models/problem.model');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.text());


app.use('/api',apiRouter);

app.get('/ping' , (req,res) => {
    return res.json({message : 'Problem Service is alive '});
});

//last middleware if any error comes 

app.use(errorHandler);

app.listen( PORT , async () =>{
    console.log(`Server started at PORT : ${PORT}`);
    await connectToDB();
    console.log("Sucessfully connected to db");


    
    
});
