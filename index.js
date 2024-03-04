const express = require('express')
const { connectToMongoDB } = require('./connection')
const urlRoute = require('./routes/url');
const fs = require('fs')


const app = express();
const PORT = 3000;


connectToMongoDB('mongodb+srv://Utkarsh:Utkarsh@cluster0.f8wsqub.mongodb.net/short_url').then(() =>
    console.log("MongoDB connected!!")
).catch((error) => 
console.log("MongoDB is encountering technical difficulties."))


app.use(express.json())

app.use((req, res, next) => {
    const log = `\n${Date.now()}  ${req.path}  ${req.method}`;
    fs.appendFile("log.txt", log, (err, data)=>{
        if(err){
            res.status(404).send({status: "Middleware is encountering technical difficulties."});
        }
    })
    next();
})

app.use("/url", urlRoute);


app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`)
})