import React from 'react'
import titanicImg from '../images/titanic.jpg'
function Header() {
    return (
        <div className='header'>
            <img src={titanicImg} />
            <br/>
            <span className='title'>
                Untill the moment it actually sunk,
                <br/>
                <sapn className='tital-titanic'>
                    The Titanic
                </sapn>
                <br/>
                was unsinkable
                <br/>
                <span className='title-author'>
                    ─Juila Hughes <br/>
                </span>
                <a className='btn pred-button' href='#predict'>Predict Survival</a>
            </span>

        </div>
    )
}

export default Header