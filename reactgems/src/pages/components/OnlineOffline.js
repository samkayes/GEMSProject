import React from 'react'

function OnlineOffline() {
    return (
        <div className='on-off-count w-25 d-flex justify-content-end'>
            <div className='count mx-3 w-25 h-100 d-flex align-items-center'>
                <p className='text-secondary h5 mb-0 mx-3'>0</p>
            </div>
            <div className='count mx-3 w-25 h-100 d-flex align-items-center'>
                <p className='text-success h5 mb-0 mx-3'>0</p>
            </div>
        </div>
    )
}

export default OnlineOffline
