import React from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';


import Login from './pages/Login';
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
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/check" element={<Check/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/add-employee" element={<Addemployee/>}/>
        <Route path="/requests/create-request" element={<CreateRequest/>}/>
        <Route path="/requests" element={<Requests/>}/>

      </Routes>
    </Router>
  );
}

export default App;
