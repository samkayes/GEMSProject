import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
const {Component} = require("react");

class Requests extends Component{

    state = {
        requests: [],
        employees: [],
        loading: true,
    }

    async componentDidMount() {
        const reqs = await axios.get('http://localhost:8000/api/requests');
        const emps = await axios.get('http://localhost:8000/api/employees');

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

        const res = await axios.post(`http://localhost:8000/api/approve/${id}`);
        const reqs = await axios.get('http://localhost:8000/api/requests');

        console.log("Test")
        if (res.data.status === 200)
        {
            this.setState({
                requests: reqs.data.requests,
                employees: this.state.employees,
                loading: false,
            })
        }
    }

    delete = async(id, e) => {
        const res = await axios.post(`http://localhost:8000/api/delete/${id}`);
        const reqs = await axios.get('http://localhost:8000/api/requests');

        console.log("Test")
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
                var bClass = "";
                var button = "";
                if (item.approved===1){
                    button = "APPROVED";
                    bClass = "btn btn-success";
                } else {
                    button = "NOT APPROVED";
                    bClass = "btn btn-danger";
                }
                return (
                    <div className="card" key={item.request_id}>
                        <div className="card-header">
                            {emp.last_name}, {emp.first_name}
                            <button data-toggle="modal" data-target="#deleteModal" className = "btn btn-danger btn-sm float-end" onClick={this.delete.bind(this, item.request_id)}>Delete</button>
                        </div>
                        <div className="card-body">
                            <p><b>Duration:</b> {item.duration} day/s</p>
                            <p><b>Reason:</b> {item.reason}</p>
                        </div>
                        <button onClick={this.approve.bind(this, item.request_id)} className = {bClass}><b>{button}</b></button>
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
                            <h4>Current Requests
                                <Link to={'create-request'} className="btn btn-primary btn-sm float-end">Create Request</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            {request_LIST}
                        </div>
                    </div>

                    <br></br>
                    <Link to={'/employees'} className="btn btn-primary">Back to Home</Link>
                </div>     
            </div>
        </div>
        )
    };
}

export default Requests;