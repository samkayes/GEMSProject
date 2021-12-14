import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
const {Component} = require("react");

class Employees extends Component{
    render(){
        return(
            <div className="container">
            <div className="row">
            <Link to='/' className="btn btn-primary btn-sm" style={{width:'100px'}}>Log Out</Link>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Employees Data
                                <Link to='/add-employee' className="btn btn-primary btn-sm float-end">Add Employees</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            
                        </div>
                    </div>
                    
                    <br></br>
                    <p><Link to='/requests' className="btn btn-primary">[DEV] View Requests</Link></p>
                </div>
            </div>
        </div>
        )
    };
}

export default Employees;
 