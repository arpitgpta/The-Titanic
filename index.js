const express = require('express')
const { spawn } = require('child_process');
var bodyParser = require("body-parser");
const path = require('path');

const app = express()
const port = 5005
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('client/build'));

app.post('/predict', (req, res) => {
    const request = JSON.parse(Object.keys(req.body)[0])
    var response;
    const passengerId = request.passengerId
    const pclass = request.pclass
    const sex = request.sex
    const age = request.age
    const siblings = request.siblings
    const parch = request.parch
    const fare = request.fare
    const embarked = request.embarked

    var sexMale
    var sexFemale
    if (sex === 'Male') {
        sexMale = 1.0
        sexFemale = 0.0
    }
    else {
        sexMale = 0
        sexFemale = 1.0
    }

    var embarkedS
    var embarkedC
    var embarkedQ
    if (embarked === 'Southamption') {
        embarkedS = 1.0
        embarkedC = 0
        embarkedQ = 0
    }
    else if (embarked === 'Cherbourg') {
        embarkedS = 0
        embarkedC = 1.0
        embarkedQ = 0
    }
    else {
        embarkedS = 0
        embarkedC = 0
        embarkedQ = 1.0
    }
    const script = spawn('python3', ['script.py', passengerId, pclass, sexMale, sexFemale, age, siblings, parch, fare, embarkedS, embarkedC, embarkedQ]);
    script.stdout.on('data', function (data) {
        response = data.toString();
    });
    script.on('close', (code) => {
        // console.log(response);
        res.send(response)
    });
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}!`))