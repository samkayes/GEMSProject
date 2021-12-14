import React, { Component } from 'react'
import axios from 'axios';

class RequestNotif extends Component {
    state = {
        requests: [],
        loading: true,
    }

    async componentDidMount() {
        const reqs = await axios.get('http://localhost:8000/api/requests');

        if (reqs.data.status === 200)
        {
            this.setState({
                requests: reqs.data.requests,
                loading: false,
            })
        }
    }

    render(){
        var notif = "";
        var unapprovedCheck = 0;
        if(this.state.loading){
            notif = '';
        } else {
            notif =
            this.state.requests.map( (item) => {
                if(item.approved == false){
                    unapprovedCheck++;
                }
            })

            if (unapprovedCheck > 0){
                return (
                    <div className="card shadow">
                        <div className='p-4 d-flex justify-content-center'>
                            {unapprovedCheck} unapproved request/s
                        </div>
                    </div>
                )
            }
        }

        return (
            <>
                {notif}
            </>
        )
    }
}

export default RequestNotif