import React from 'react'
import Logo from './Logo';

function Sidebar() {
    return (
        <>
            <nav className='h-100 w-100 d-flex flex-column  p-3'>
                <Logo className='p-2' />
                <ul className='list-group mt-5'>
                    <li className='list-group-item bg-light py-3'>Dashboard</li>
                    <li className='list-group-item bg-light py-3'>Employees</li>
                    <li className='list-group-item bg-light py-3'>Request</li>
                </ul>
                <button type='button' className='mx-auto w-50 btn btn-danger mt-auto p-2'>Logout</button>
            </nav>
        </>
    )
}

export default Sidebar
