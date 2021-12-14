import React from 'react'
import {Link} from 'react-router-dom';
import Logo from './Logo';


function Sidebar() {
    return (
        <>
            <nav className='h-100 w-100 d-flex flex-column  p-3'>
                <Logo className='p-2' />
                <ul className='list-group mt-5'>
                    <Link to={'/dashboard'} className="my-2 border-0 btn btn-primary btn-sm float-end text-dark bg-light py-3">Dashboard</Link>
                    <Link to={'/employee'} className="my-2 border-0 btn btn-primary btn-sm float-end text-dark bg-light py-3">Employees</Link>
                    <Link to={'/requests'} className="my-2 border-0 btn btn-primary btn-sm float-end text-dark bg-light py-3">Requests</Link>
                </ul>
                <button type='button' className='mx-auto w-50 btn btn-danger mt-auto p-2'>Logout</button>
            </nav>
        </>
    )
}

export default Sidebar
