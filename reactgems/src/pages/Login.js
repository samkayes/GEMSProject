import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';
const { Component } = require("react");

class Login extends Component{
    
   state = {
       username: '',
       password: '',
   }

   handleInput = (e) => {
       e.persist();
       this.setState({
        [e.target.name]: e.target.value
       });
   }

   loginSubmit = () =>{
      axios.defaults.withCredentials = true;
       const data = {
           username: this.username,
           password: this.password,
       }
       axios.get('sanctum/csrf-cookie').then(response => {
       axios.post('api/login',this.sta).then(res =>{
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal("Sucesss",res.data.message,'success');
                let navigate = useNavigate();
                navigate('/employee');
            }else if(res.data.status === 200){
                swal("Warning",res.data.message,'warning');
            }else{
                
            } this.navigateTo('/employee');
       });
       });
   }
   
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Login
                            </h4>
                        </div>
                        <div className="card-body"></div>
                            <form onSubmit={this.loginSubmit}>
                                
                                <div className="form-group mb-3">
                                    <label>Username</label>
                                    <input type="text" name="username" onChange={this.handleInput} value={this.state.username} className="form-control" />
                                </div>
                                
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input type="password" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" />
                                </div>
                                
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary">Log In</button>
                                </div>
                            </form>
                    </div>
                
                </div>
            </div>
        </div>
        )
    };
}

export default Login;
 