import React from 'react'

import survidedImg from '../images/survived.png'
import ageImg from '../images/age.png'
import pclassImg from '../images/pclass.png'
import siblingsImg from '../images/siblings.png'
import parchImg from '../images/parch.png'
import fareImg from '../images/fare.png'

import DataCard from './dataCard'

function PassengerData() {
    return (
        <div className='pass-data'>
            <div className='data-title'>
                Let's have a look on passenger's data of the royal vessel..
            </div>

            <div className='data-items-container'>
                <DataCard
                    className='card-even'
                    _img={survidedImg}
                    data='Most of those aboard the Titanic were to lose their lives when she went down, but some were lucky.'
                />
                <DataCard
                    className='card-odd'
                    _img={ageImg}
                    data='More than half of the passengers were in age group of 18 to 30.'
                />

                <DataCard
                    className='card-even'
                    _img={pclassImg}
                    data='Number of Class 3 passengers was more than total number of class 2 and class 1 passengers.'
                />
                <DataCard
                    className='card-odd'
                    _img={siblingsImg}
                    data='Only few passengers were there, travelling with 3 or more than 3 siblings.'
                />


                <DataCard
                    className='card-even'
                    _img={parchImg}
                    data='650+ passengers were travelling without there parents/children'
                />

                <DataCard
                    className='card-odd'
                    _img={pclassImg}
                    data='Number of Class 3 passengers was more than total number of class 2 and class 1 passengers.'
                />
            </div>
        </div>
    )
}

export default PassengerData