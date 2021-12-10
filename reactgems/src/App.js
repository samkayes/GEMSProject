import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Check from './pages/Check'
import Employee from './pages/Employees';
import Addemployee from './pages/Addemployee';
import CreateRequest from './pages/CreateRequest';
import Requests from './pages/Requests';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/home/check" element={<Check/>}/>
        <Route exact path="/" element={<Employee/>}/>
        <Route exact path="/add-employee" element={<Addemployee/>}/>
        <Route exact path="/requests/create-request" element={<CreateRequest/>}/>
        <Route exact path="/requests" element={<Requests/>}/>
      </Routes>
    </Router>
  );
}

export default App;
