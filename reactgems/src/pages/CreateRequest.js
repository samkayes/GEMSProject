import React from 'react';
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
import RequestForm from './components/RequestForm';
const {Component} = require("react");

class CreateRequest extends Component{
    render(){
        return(
            <div className='page-format'>
                <div className='sidebar shadow'>
                    <Sidebar />
                </div>
                <div className='page-content d-flex flex-column'>
                    <PageContent title="REQUEST FORM" page={<RequestForm />}/>
                </div>
            </div>
        )
    };
}

export default CreateRequest;
 