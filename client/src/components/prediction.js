import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dropdown from 'react-dropdown'

function Prediction() {
    const [prediction, setPrediction] = useState('predicting')

    const [passengerId, setPassengerId] = useState(1)
    const [pclass, setPclass] = useState('3')
    const [sex, setSex] = useState('Female')
    const [age, setAge] = useState(28)
    const [siblings, setSiblings] = useState('1')
    const [parch, setParch] = useState('0')
    const [fare, setFare] = useState(7.25)
    const [embarked, setEmbarked] = useState('Southampton')


    useEffect(() => {
        setPrediction('predicting')
        const data = {
            passengerId,
            pclass,
            sex,
            age,
            siblings,
            parch,
            fare,
            embarked
        };
        const url = '/predict'
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data,
            url
        };
        axios(options).then(res => {
            if (res.data[17] === '0')
                setPrediction('Couldn\'t survive')
            else
                setPrediction('Survived')
        })
    }, [passengerId, pclass, sex, age, siblings, parch, fare, embarked])


    const handelPassengerId = e => {
        if (e.target.value > 0 && e.target.value < 892)
            setPassengerId(e.target.value)
    }

    const pclasses = ['1', '2', '3'];
    const handelPclass = e => setPclass(e.value)

    const sexValues = ['Male', 'Female']
    const handelSex = e => setSex(e.value)


    const handelAge = e => {
        if (e.target.value > 0 && e.target.value < 100)
            setAge(e.target.value)
    }

    const siblingValues = ['0', '1', '2', '3']
    const handelSibilings = e => setSiblings(e.value)

    const parches = ['0', '1', '2', '3']
    const handelParch = e => setParch(e.value)

    const handelFare = e => setFare(e.target.value)

    const embark_port = ['Southamption', 'Cherbourg', 'Queenstown']
    const handelEmbarked = e => setEmbarked(e.value)

    return (
        <div>

            <input id='passengerId' type='number' value={passengerId} min={1} max={891} onChange={handelPassengerId} />
            <br />
            <Dropdown id='pclass' options={pclasses} onChange={handelPclass} value={pclass} />
            <br />
            <Dropdown id='sex' options={sexValues} onChange={handelSex} value={sex} />
            <br />
            <input id='age' type='number' min={0} max={100} value={age} onChange={handelAge} />
            <br />
            <Dropdown id='siblings' options={siblingValues} onChange={handelSibilings} value={siblings} />
            <br />
            <Dropdown id='parch' options={parches} onChange={handelParch} value={parch} />
            <br />
            <input id='fare' value={fare} onChange={handelFare} />
            <br />
            <Dropdown id='embarked' options={embark_port} onChange={handelEmbarked} value={embarked} />
            <br />

            {prediction}
        </div>
    )
}

export default Prediction