import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const { Component } = require("react");

class RequestForm extends Component{

    state = {
        emp_id: '',
        leavedate: '',
        duration: '',
        reason: '',
        // error_list:[],
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveRequest = async (e) =>{
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/create-request', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "Done!",
              });
            this.setState({
                emp_id: '',
                leavedate: '',
                duration: '',
                reason: '',
            });
        }
        //else{
        //     this.setState({
         //        error_list: res.data.validate_err,
       //      });
        // }
    }

    render(){
        return(
            <div className='schedules h-auto d-flex p-5'>
                <div className='schedules-content w-75 p-2'>
                    <div className="card shadow">
                        <div className='p-4 d-flex justify-content-between'>
                            <p className='h3 m-0'>Request Form</p>
                            <Link to={'/requests'} className="btn btn-primary btn-sm float-end">Back</Link>
                        </div>
                            <form onSubmit={this.saveRequest}>
                                <div className="form-group mb-3">
                                    <label>Employee ID</label>
                                    <input type="number" name="emp_id" onChange={this.handleInput} value={this.state.emp_id} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Leave Starting Date</label>
                                    <input type="date" name="leavedate" onChange={this.handleInput} value={this.state.leavedate} className="form-control" />
                                </div>
                                {/* <span className="text-danger">{this.state.error_list.fname}</span> */}
                                <div className="form-group mb-3">
                                    <label>Duration</label>
                                    <input type="number" name="duration" onChange={this.handleInput} value={this.state.duration} className="form-control" />
                                </div>
                                {/* <span className="text-danger">{this.state.error_list.mname}</span> */}
                                <div className="form-group mb-3">
                                    <label>Reason</label>
                                    <input type="text" name="reason" onChange={this.handleInput} value={this.state.reason} className="form-control" />
                                </div>
                                {/* <span className="text-danger">{this.state.error_list.password}</span> */}
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary float-end" style={{margin:'10px'}}>Send Request</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        )
    };
}

export default RequestForm;
 