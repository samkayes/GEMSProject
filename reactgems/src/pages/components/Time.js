import React from 'react'

function Time() {
    return (
        <div>
            <div className='time w-100 d-flex justify-content-end'>

                <div className='time-am mx-2 w-50 h-100 d-flex align-items-center'>
                    <p className='h5 mb-0 mx-3'>--:--</p>
                </div>
                <div className='time-pm mx-2 w-50 h-100 d-flex align-items-center'>
                    <p className='h5 mb-0 mx-3'>--:--</p>
                </div>
            </div>
        </div>
    )
}

export default Time
