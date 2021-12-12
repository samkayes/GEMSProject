import React from 'react';
import {Link} from 'react-router-dom';
import Clock from "./Clock";
import logo from '../logo.svg';
import '../App.css';
const {Component} = require("react");

class Home extends Component{
    render(){
        return(
            <div className='App-header'>
                <div className="container text-center">
                    <div className="row">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1>Employee Check</h1>
                        <Clock></Clock>
                        <br/><br/>
                        <div className="col-md-6">                        
                            <Link to={'check'} className="btn btn-primary btn-lg" style={{"height" : "5rem", "width" : "90%","font-size":"35px"}}>Check-in</Link>
                        </div>
                        <div className='col-md-6'>
                            <Link to={'employees'} className="btn btn-secondary btn-lg" style={{"height" : "100%", "width" : "90%","font-size":"35px"}}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Home;