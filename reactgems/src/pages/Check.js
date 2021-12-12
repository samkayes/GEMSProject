import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import Clock from "./Clock";

const { Component } = require("react");

class Check extends Component{

    state = {
        emp_id: '',
        type: '',
        // error_list:[],
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveCheck = async (e) =>{
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
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Activity Check
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            </h4>
                        </div>
                        <div className="card-body"></div>
                            <Clock></Clock>
                            <form onSubmit={this.saveCheck}>
                                <div className="form-group mb-3">
                                    <label>Employee ID</label>
                                    <input type="number" name="emp_id" onChange={this.handleInput} value={this.state.emp_id} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Check-in</label>
                                    <input type="number" name="type" onChange={this.handleInput} value={this.state.type} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary">Check-in</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        )
    };
}

export default Check;