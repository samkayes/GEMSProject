import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

class EmployeeList extends Component{

    
    render(){
        return(
            <div className='schedules h-auto d-flex p-5'>
                <div className='schedules-content w-75 p-2'>
                    <div className="card shadow">
                        <div className='p-4 d-flex justify-content-between'>
                            <p className='h3 m-0'>Employee List</p>
                            <Link to='/add-employee' className="btn btn-primary float-end">Add Employee</Link>
                        </div>
                        <ul className="list-group list-group-flush">
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeList
