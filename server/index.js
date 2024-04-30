const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = new express();
app.use(express.json());


app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@vighnesh.udddwgg.mongodb.net/?retryWrites=true&w=majority&appName=vighnesh')
client.connect();
const db = client.db('management1')
const col = db.collection('user')



app.get('/home ', (req, res) => {
    res.send("It is a Home page - New page")
})

app.post('/insert', (req, res) =>{
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Received")
})

app.listen(8081);
console.log ("Server Running");