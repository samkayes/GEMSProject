import React from 'react'
import Time from './Time';

function TimeSchedules() {
    return (
        <>
            <li className="list-group-item py-3 px-5 d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center w-25'>
                    <p className='m-0 h5'>sample name 1</p>
                </div>
                <Time />
            </li>
            <li className="list-group-item py-3 px-5 d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center w-25'>
                    <p className='m-0 h5'>sample name 2</p>
                </div>
                <Time />
            </li>
            <li className="list-group-item py-3 px-5 d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center w-25'>
                    <p className='m-0 h5'>sample name 3</p>
                </div>
                <Time />
            </li>
            <li className="list-group-item py-3 px-5 d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center w-25'>
                    <p className='m-0 h5'>sample name 2</p>
                </div>
                <Time />
            </li>
            <li className="list-group-item py-3 px-5 d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center w-25'>
                    <p className='m-0 h5'>sample name 3</p>
                </div>
                <Time />
            </li>
        </>
    )
}

export default TimeSchedules
