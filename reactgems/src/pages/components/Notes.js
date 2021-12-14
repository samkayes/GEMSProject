import React, { Component } from 'react'
import axios from 'axios';

class Notes extends Component {
    state = {
        requests: [],
        employees: [],
        loading: true,
    }

    async componentDidMount() {
        const reqs = await axios.get('http://localhost:8000/api/requests');
        const emps = await axios.get('http://localhost:8000/api/employees');

        if (reqs.data.status === 200 && emps.data.status === 200)
        {
            this.setState({
                requests: reqs.data.requests,
                employees: emps.data.employees,
                loading: false,
            })
        }
    }

    render(){
        var request_LIST = "";
        if(this.state.loading){
            request_LIST = 
            <li className="list-group-item py-3 px-5 d-flex justify-content-between">
                <p className='m-0 h5'>Loading . . .</p>
            </li>
        } else {
            request_LIST =
            this.state.requests.map( (item) => {
                var emp = this.state.employees.find(element => element.emp_id === item.emp_id);
                if (item.approved == true){
                    return (
                        <div key={item.request_id} className="list-group-item py-3 px-5 d-flex justify-content-between">
                            <div className='d-flex align-items-center flex-column w-100'>
                                <p className='m-0 h4 font-weight-bold'>{item.leavedate}</p>
                                <p className='m-0 h5'>Request of: {emp.last_name}, {emp.first_name}</p>
                                <p className='m-0 h5'>Duration: {item.duration} day/s</p>
                                <p className='m-0 h5'>Reason: {item.reason}</p>
                            </div>
                        </div>
                    )
                }
            })
        }

        return (
            <>
                {request_LIST}
            </>
        )
    }
}

export default Notes
