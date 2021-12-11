import React from 'react'
import OnlineOffline from './OnlineOffline';
import TimeSchedules from './TimeSchedules';
import Notes from './Notes';

function Schedules() {
    return (
        <div className='schedules h-auto d-flex p-5'>
            <div className='schedules-content w-75 p-2'>
                <div className="card shadow">
                    <div className='p-4 d-flex justify-content-between'>
                        <p className='h3 m-0'>Employee Attendance</p>
                        <OnlineOffline />
                    </div>
                    <ul className="list-group list-group-flush">
                        <TimeSchedules />
                    </ul>
                </div>
            </div>
            <div className='notes-content w-25 p-2'>
                <div className="card shadow">
                    <div className='p-4 d-flex justify-content-center'>
                        <p className='h3 m-0'>Dates to Note</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <Notes />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Schedules
