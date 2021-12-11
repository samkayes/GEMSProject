import React from 'react'

function Notes() {
    return (
        <>
            <li className="list-group-item py-3 px-5 d-flex justify-content-between">
                <div className='d-flex align-items-center flex-column w-100'>
                    <p className='m-0 h4 font-weight-bold'>December 3, 2000</p>
                    <p className='m-0 h5'>Request of: sample name 1</p>
                    <p className='m-0 h5'>reason</p>
                </div>
            </li>  
            <li className="list-group-item py-3 px-5 d-flex justify-content-between">
                <div className='d-flex align-items-center flex-column w-100'>
                    <p className='m-0 h4 font-weight-bold'>December 23, 2000</p>
                    <p className='m-0 h5'>Request of: sample name 1</p>
                    <p className='m-0 h5'>reason 2</p>
                </div>
            </li>  
        </>
    )
}

export default Notes
