const express = require('express')
const { spawn } = require('child_process');
var bodyParser = require("body-parser")


const app = express()
const port = 5000
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {

    var dataToSend;
    const script = spawn('python', ['script.py']);    
    script.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });
    script.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        res.send(dataToSend)
    });
})

app.get('/predict', (req, res) => {
    var dataToSend;
    const script = spawn('python', ['script.py']);    
    script.stdout.on('data', function (data) {
        dataToSend = data.toString();
    });
    script.on('close', (code) => {
        res.send(dataToSend)
    });
})

app.post('/like', (req, res) => {
    const request = JSON.parse(Object.keys(req.body)[0])
    console.log(request);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))