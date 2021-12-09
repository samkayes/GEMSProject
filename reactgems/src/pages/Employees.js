import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
const {Component} = require("react");

class Employees extends Component{

    state = {
        requests: [],
        employees: [],
        loading: true,
    }

    async componentDidMount() {
        const reqs = await axios.get('http://localhost:8000/api/requests');
        const emps = await axios.get('http://localhost:8000/api/employees');

        console.log(emps);
        if (reqs.data.status === 200 && emps.data.status === 200)
        {
            this.setState({
                requests: reqs.data.requests,
                employees: emps.data.employees,
                loading: false,
            })
        }
    }

    approve = async(id, e) => {

        const reqs = await axios.get('http://localhost:8000/api/requests');
        const res = await axios.post(`http://localhost:8000/api/approve/${id}`);

        if (res.data.status === 200)
        {
            this.setState({
                requests: reqs.data.requests,
                employees: this.state.employees,
                loading: false,
            })
        }
    }

    render(){

        var request_LIST = "";
        if(this.state.loading){
            request_LIST = "LOADING";
        } else {
            request_LIST =
            this.state.requests.map( (item) => {
                var emp = this.state.employees.find(element => element.emp_id === item.emp_id);
                var approved = "";
                var button = "";
                if (item.approved===1){
                    approved = "APPROVED";
                    button = "DISAPPROVE";
                } else {
                    approved = "NOT APPROVED";
                    button = "APPROVE";
                }
                return (
                    <div key={item.request_id} className="card-body">
                        <p>REQUESTER: {emp.last_name}, {emp.first_name}</p>
                        <p>REASON: {item.reason}</p>
                        <p>{approved}</p>
                        <button onClick={this.approve.bind(this, item.request_id)} className = "btn btn-primary">{button}</button>
                    </div>
                )
            })
        }

        return(
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Employees Data
                                <Link to={'add-employee'} className="btn btn-primary btn-sm float-end">Add Employees</Link>
                            </h4>
                        </div>
                        <div className="card-body"></div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h4>Current Requests
                                <Link to={'create-request'} className="btn btn-primary btn-sm float-end">Create Request</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            {request_LIST}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    };
}

export default Employees;
 