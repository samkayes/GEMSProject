import React from 'react';
import {Link} from 'react-router-dom';
const {Component} = require("react");

class Home extends Component{
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Employee Check</h4>
                        </div>
                        <div className="card-body">
                        <Link to={'check'} className="btn btn-primary">Input</Link>
                        <br/><br/>
                        <Link to={'login'} className="btn btn-primary">Login</Link>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        )
    };
}

export default Home;