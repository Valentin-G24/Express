const express = require('express');
const app = express();
const taskRouter = require("./task.router.js");
const PORT = process.env.PORT;
const mongoose = require('mongoose');
require('dotenv').config() || 3000;

app.use(express.json());
app.use("/tasks",taskRouter);

app.listen(PORT, (err,res) => { 
    
    mongoose.connect(process.env.MONGOCONNECTION)
    console.log("funciona")
})

app.get('/', 
	(req, res) => res.send('¡Hola!')
);