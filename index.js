const express = require('express')
const { connectToMongoDB } = require('./connection')
const { urlRoute } = require('./routes/url');


const app = express();
const PORT = 8001;


connectToMongoDB('mongodb+srv://Utkarsh:Utkarsh@cluster0.f8wsqub.mongodb.net/short_url').then(() => console.log("MongoDB connected!!"))


// app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
app.use("/url", urlRoute);

app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`)
})