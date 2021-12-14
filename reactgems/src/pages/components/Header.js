import React from 'react'

function Header({title}) {
    return (
        <div className='header d-flex align-items-center justify-content-between p-5'>
            <p className='display-5 m-0'>{title}</p>
            <div className='user-icon bg-dark'>

            </div>
        </div>
    )
}

export default Header
