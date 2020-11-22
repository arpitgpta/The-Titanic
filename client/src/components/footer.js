import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className='my-intro'>
                <span className='developer-name'> Arpit Gupta, </span> <br/>
                Student, Pre-final year <br/>
                NIT Patna <br/>
                <i class="fas fa-phone ficon"></i>
                +91 9648546380
                <br/>
                <i class="fas fa-envelope ficon"></i>
                arpit.cs18@nitp.ac.in
                <br/>

                <a class="fab fa-linkedin" href='https://www.linkedin.com/in/arpit-gupta-4068b0175/' target='_blank'></a>
                <a class="fab fa-github-square" href='https://github.com/arpitgpta' target='_blank'></a>
            </div>

            {/* resume link */}
            <div>
                <a className='btn resume' href='https://drive.google.com/file/d/1BSev-sWNc0dmeA2GjrjxPlyqJ01548ML/view?usp=sharing' target='_blank'> Resume</a>
            </div>
        </div>
    )
}

export default Footer