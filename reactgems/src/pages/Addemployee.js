import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

const { Component } = require("react");

class Addemployee extends Component{

    state = {
        fname: '',
        mname: '',
        lname: '',
        address: '',
        contact_num: '',
        email: '',
        emcon:'',
        role:'',
        username:'',
        user_type:'',
        password:'',
        error_list:[],
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveEmployee = async (e) =>{
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/add-employee', this.state);
        if(res.data.status === 200)
        {
            this.navigateTo('/employee');
            console.log(res.data.message);
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "Done!",
              }).then(function(){
                window.location="http://localhost:3000/employee";
            });
            this.setState({
                fname: '',
                mname: '',
                lname: '',
                address: '',
                contact_num: '',
                email: '',
                emcon:'',
                role:'',
                username:'',
                password:'',
            });
        }else{
            this.setState({
                error_list: res.data.validate_err,
            });
        }

    }

    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Add Employee
                                <Link to={'/employee'} className="btn btn-primary btn-sm float-end">Back</Link>

                            </h4>
                        </div>
                        <div className="card-body"></div>
                            <form onSubmit={this.saveEmployee}>
                                <div className="form-group mb-3">
                                    <label>First Name</label>
                                    <input type="text" name="fname" onChange={this.handleInput} value={this.state.fname} className="form-control" />
                                    <span className="text-danger">{this.state.error_list.fname}</span>
                                </div>
                                
                                <div className="form-group mb-3">
                                    <label>Middle Name</label>
                                    <input type="text" name="mname" onChange={this.handleInput} value={this.state.nmame} className="form-control" />
                                    <span className="text-danger">{this.state.error_list.mname}</span>
                                </div>
                                
                                <div className="form-group mb-3">
                                    <label>Last Name</label>
                                    <input type="text" name="lname" onChange={this.handleInput} value={this.state.lname} className="form-control" />
                                    <span className="text-danger">{this.state.error_list.lname}</span>
                                </div>
                                
                                <div className="form-group mb-3">
                                    <label>Address</label>
                                    <input type="text" name="address" onChange={this.handleInput} value={this.state.address} className="form-control" />
                                    <span className="text-danger">{this.state.error_list.address}</span>
                                </div>
                                
                                <div className="form-group mb-3">
                                    <label>Contact Number</label>
                                    <input type="text" name="contact_num" onChange={this.handleInput} value={this.state.contact_num} className="form-control" />
                                    <span className="text-danger">{this.state.error_list.contact_num}</span>
                                </div>
                               
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
                                    <span className="text-danger">{this.state.error_list.email}</span>
                                </div>
                               
                                <div className="form-group mb-3">
                                    <label>Emergency Contact</label>
                                    <input type="text" name="emcon" onChange={this.handleInput} value={this.state.emcon} className="form-control" />
                                    <span className="text-danger">{this.state.error_list.emcon}</span>
                                </div>
                             
                                <div className="form-group mb-3">
                                    <label>Role</label>
                                    <input type="text" name="role" onChange={this.handleInput} value={this.state.role} className="form-control" />
                                    <span className="text-danger">{this.state.error_list.role}</span>
                                </div>
                             
                                <div className="form-group mb-3">
                                    <label>Username</label>
                                    <input type="text" name="username" onChange={this.handleInput} value={this.state.username} className="form-control" />
                                    <span className="text-danger">{this.state.error_list.username}</span>    
                                </div>
                                
                                <div className="form-group mb-3">
                                    <label>Temporary Password</label>
                                    <input type="text" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" />
                                    <span className="text-danger">{this.state.error_list.password}</span>
                                </div>
                                
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary">Create Employee</button>
                                </div>
                            </form>
                    </div>
                
                </div>
            </div>
        </div>
        )
    };
}

export default Addemployee;
 