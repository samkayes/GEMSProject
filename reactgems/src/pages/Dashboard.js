import React from 'react';
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
import Schedules from './components/Schedules';
const {Component} = require("react");

class Dashboard extends Component{
    render(){
        return(
            <div className='page-format'>
                <div className='sidebar shadow'>
                    <Sidebar />
                </div>
                <div className='page-content d-flex flex-column'>
                    <PageContent title="DASHBOARD" page={<Schedules />}/>
                </div>
            </div>
        )
    };
}

export default Dashboard;
 