import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
import EmployeeForm from './components/EmployeeForm';

const { Component } = require("react");

class Addemployee extends Component{
    render(){
        return(
            <div className='page-format'>
                <div className='sidebar shadow'>
                    <Sidebar />
                </div>
                <div className='page-content d-flex flex-column'>
                    <PageContent title="CREATE EMPLOYEE" page={<EmployeeForm />}/>
                </div>
            </div>
        )
    };
   
}

export default Addemployee;
 