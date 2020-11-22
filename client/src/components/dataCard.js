import React from 'react'

function DataCard(props) {
    const cname = props.className+' data-item d-flex justify-content-between align-items-center flex-wrap'
    if (props.className === 'card-even') {
        return (
            <div className={cname}>
                <div className='datacard-img'>
                    <img src={props._img} />
                </div>
                <div className='datacard-data d-flex justify-content-between align-items-center'>
                    {props.data}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={cname}>
                <div className='datacard-data d-flex justify-content-between align-items-center'>
                    {props.data}
                </div>
                <div className='datacard-img'>
                    <img src={props._img} />
                </div>
            </div>
        )
    }
}

export default DataCard