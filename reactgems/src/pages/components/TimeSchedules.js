import React from 'react'
import Time from './Time';

import axios from 'axios';

const {Component} = require("react");

class TimeSchedules extends Component{

    state = {
        employees:[],
        loading: true,
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/dashboard');
        console.log(res);
        if(res.data.status === 200){
            this.setState({
                employees: res.data.employees,
                loading: false,
            });
        }
    }

    render(){
        var schedules = "";
        if(this.state.loading){
            schedules =
                <li className="list-group-item py-3 px-5 d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center w-25'>
                        <p className='m-0 h5'>Loading . . .</p>
                    </div>
                </li>
        }else{
            schedules = this.state.employees.map( (per) => {
                return (
                    <li key={per.emp_id} className="list-group-item py-3 px-5 d-flex align-items-center justify-content-between">
                        <div className='d-flex align-items-center w-25'>
                            <p className='m-0 h5'>{per.first_name} {per.last_name}</p>
                        </div>
                        <Time />
                    </li>
                );
            });
        }

        return(
            <>
                {schedules}
            </>
        )
    };
}

export default TimeSchedules;