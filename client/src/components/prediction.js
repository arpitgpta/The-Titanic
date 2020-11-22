import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import { FormGroup, Label, Input } from "reactstrap";

import Predicting from './predicting'
import Survived from './survived'
import NotSurvived from './not_survived'

function Prediction() {
    const [prediction, setPrediction] = useState(<Predicting />)

    const [passengerId, setPassengerId] = useState(1)
    const [pclass, setPclass] = useState('3')
    const [sex, setSex] = useState('Female')
    const [age, setAge] = useState(28)
    const [siblings, setSiblings] = useState('1')
    const [parch, setParch] = useState('0')
    const [fare, setFare] = useState(7.25)
    const [embarked, setEmbarked] = useState('Southampton')


    useEffect(() => {
        setPrediction(<Predicting />)
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
                setPrediction(<NotSurvived />)
            else
                setPrediction(<Survived />)
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
        <div id='predict'>
            <div className='predict-title'>
                Predict Survival of a Passenger
            </div>

            <FormGroup className='input_group'>
                <Label>Passenger ID</Label>
                <Input className='input-field' id='passengerId' type='number' value={passengerId} min={1} max={891} onChange={handelPassengerId} />
            </FormGroup>

            <FormGroup className='input_group'>
                <Label>Class</Label>
                <Dropdown className='input-field' id='pclass' options={pclasses} onChange={handelPclass} value={pclass} />
            </FormGroup>

            <FormGroup className='input_group'>
                <Label>Sex</Label>
                <Dropdown className='input-field' id='sex' options={sexValues} onChange={handelSex} value={sex} />
            </FormGroup>

            <FormGroup className='input_group'>
                <Label>Age</Label>
                <Input className='input-field' id='age' type='number' min={0} max={100} value={age} onChange={handelAge} />
            </FormGroup>

            <FormGroup className='input_group'>
                <Label>Number of Siblings</Label>
                <Dropdown className='input-field' id='siblings' options={siblingValues} onChange={handelSibilings} value={siblings} />
            </FormGroup>

            <FormGroup className='input_group'>
                <Label>Number of Parents/Childern</Label>
                <Dropdown className='input-field' id='parch' options={parches} onChange={handelParch} value={parch} />
            </FormGroup>

            <FormGroup className='input_group'>
                <Label>Fare</Label>
                <Input className='input-field' id='fare' value={fare} onChange={handelFare} />
            </FormGroup>

            <FormGroup className='input_group'>
                <Label>Port of Embarkation</Label>
                <Dropdown className='input-field' id='embarked' options={embark_port} onChange={handelEmbarked} value={embarked} />
            </FormGroup>

            <div className="prediction d-flex justify-content-between align-items-center">
                {prediction}
            </div>
        </div>
    )
}


export default Prediction