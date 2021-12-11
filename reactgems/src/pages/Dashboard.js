import React from 'react';
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
const {Component} = require("react");

class Dashboard extends Component{
    render(){
        return(
            <div className='page-format'>
                <div className='sidebar shadow'>
                    <Sidebar />
                </div>
                <div className='page-content d-flex flex-column'>
                    <PageContent />
                </div>
            </div>
        )
    };
}

export default Dashboard;
 