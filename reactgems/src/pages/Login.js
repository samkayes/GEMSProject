import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from 'react-router-dom';
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

   loginSubmit = async (e) =>{
    
       e.preventDefault();
       
    //    const data = {
    //        username: this.username,
    //        password: this.password,
    //    }
    //    axios.get('sanctum/csrf-cookie').then(response => {
    //    axios.post('api/login',data).then(res =>{
    //         if(res.data.status === 200)
    //         {
    //             localStorage.setItem('auth_token', res.data.token);
    //             localStorage.setItem('auth_name', res.data.username);
    //             swal("Sucesss",res.data.message,'success');
    //             navigate = useNavigate();
    //             navigate('/employee');
    //         }else if(res.data.status === 200){
    //             swal("Warning",res.data.message,'warning');
    //         }else{ navigate = useNavigate();
       //     navigate('/employee');       
    //         } this.navigateTo('/employee');
    //    });
    //    });
        const res = await axios.post('http://localhost:8000/api/login', this.state);
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
                username: '',
                password: '',
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
                            <Link to={'/requests'} className="btn btn-primary btn-sm float-end">Proceed</Link>
                    </div>
                
                </div>
            </div>
        </div>
        )
    };
}

export default Login;
 