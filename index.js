const express = require('express')
const { connectToMongoDB } = require('./connection')
const urlRoute = require('./routes/url');
const fs = require('fs');
const logReqRes = require('./middleware/url');


const app = express();
const PORT = 3000;


connectToMongoDB('mongodb+srv://Utkarsh:Utkarsh@cluster0.f8wsqub.mongodb.net/short_url').then(() =>
    console.log("MongoDB connected!!")
).catch((error) => 
console.log("MongoDB is encountering technical difficulties."))


app.use(express.json())

app.use(logReqRes)

app.use("/url", urlRoute);


app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`)
})