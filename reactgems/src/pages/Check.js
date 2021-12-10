import React from 'react';
import {Link} from 'react-router-dom';
const {Component} = require("react");

class Check extends Component{
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Welcome, </h4>
                        </div>
                        <div className="card-body">
                        <Link to={'checkin'} className="btn btn-primary btn-md">Check-in</Link>
                        <Link to={'checkout'} className="btn btn-primary btn-md">Check-out</Link>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        )
    };
}

export default Check;