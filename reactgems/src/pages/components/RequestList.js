import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

class RequestList extends Component{

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

        console.log("Approve/Disapprove")
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

        console.log("Deleted Request")
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
            request_LIST = 
            <li className="list-group-item py-3 px-5 d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center w-25'>
                    <p className='m-0 h5'>Loading . . .</p>
                </div>
            </li>
        } else {
            request_LIST =
            this.state.requests.map( (item) => {
                var emp = this.state.employees.find(element => element.emp_id === item.emp_id);
                var bClass = "";
                var button = "";
                if (item.approved===1){
                    button = "APPROVED";
                    bClass = "btn btn-success btn-sm";
                } else {
                    button = "NOT APPROVED";
                    bClass = "btn btn-danger btn-sm";
                }
                return (
                    <div key={item.request_id} className="list-group-item py-3 px-5 align-items-center justify-content-between">
                        <div>
                            {emp.last_name}, {emp.first_name}
                            <div className = "float-end">
                                <button className = "btn btn-danger btn-sm me-2" onClick={this.delete.bind(this, item.request_id)}><b>DELETE</b></button>
                                <button onClick={this.approve.bind(this, item.request_id)} className = {bClass}><b>{button}</b></button>
                            </div>
                        </div>
                        <div>
                            <p><b>Leave Date:</b> {item.leavedate}<br></br>
                            <b>Duration:</b> {item.duration} day/s<br></br>
                            <b>Reason:</b> {item.reason}</p>
                        </div>
                    </div>
                )
            })
        }

        return(
            <div className='schedules h-auto d-flex p-5'>
                <div className='schedules-content w-75 p-2'>
                    <div className="card shadow">
                        <div className='p-4 d-flex justify-content-between'>
                            <p className='h3 m-0'>Employee Requests</p>
                            <Link to={'create-request'} className="btn btn-primary btn-sm float-end">Create Request</Link>
                        </div>
                        <ul className="list-group list-group-flush">
                            {request_LIST}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default RequestList
