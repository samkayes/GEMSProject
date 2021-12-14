import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../logo.svg';
const { Component } = require("react");

class Login extends Component{
    
   state = {
       username: '',
       password: '',
       error_list:[],
   }

   handleInput = (e) => {
       e.persist();
       this.setState({
        [e.target.name]: e.target.value
       });
   }

   loginSubmit = async (e) =>{
    
       e.preventDefault();
       
       const data = {
           username: this.username,
           password: this.password,
       }
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
                title: "Logged In Succesfully",
                text: 'Welcome to GEMS',
                icon: "success",
                button: "Done!",
            }).then(function(){
                window.location="http://localhost:3000/home";
            });
            this.setState({
                username: '',
                password: '',
            });
        }else{
            this.setState({
                error_list: res.data.validate_err,
            })
        }

        
    }
   
    render(){
        return(
            <div className="container">         
               <div class="bg row shadow">
                    <div className="col justify-center" style={{textAlign:'center'}}>
                    <img src={logo} className="App-logo" alt="logo" />
                        <h1>G E M S</h1>
                    </div>
                    <div className="col">
                     <div>
                     <h2>Sign In</h2>
                     </div>
                    <form onSubmit={this.loginSubmit}>                               
                        <div className="form-group mb-3">
                            <label>Username</label>
                            <input type="text" name="username" onChange={this.handleInput} value={this.state.username} className="form-control" />
                            <span className="text-danger">{this.state.error_list.username}</span>
                        </div>
                        
                        <div className="form-group mb-3">
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" />
                            <span className="text-danger">{this.state.error_list.password}</span>
                        </div>
                        
                        <div className="form-group mb-3">
                            <button type="submit" className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    };
}

export default Login;
 