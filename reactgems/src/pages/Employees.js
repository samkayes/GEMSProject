import React from 'react';
import {Link} from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
const {Component} = require("react");

class Employees extends Component{
    render(){
        return(
            <div className="page-format">
                <div className='sidebar shadow'>
                    <Sidebar />
                </div>
                <div className='page-content d-flex flex-column'>
                    <PageContent title="EMPLOYEES" page={<EmployeeList />}/>
                </div>
            </div>
        )
        
    };
}

export default Employees;
 