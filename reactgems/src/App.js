import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Employee from './pages/Employees';
import Addemployee from './pages/Addemployee';
import CreateRequest from './pages/CreateRequest';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Employee/>}/>
        <Route exact path="/add-employee" element={<Addemployee/>}/>
        <Route exact path="/create-request" element={<CreateRequest/>}/>
      </Routes>
    </Router>
  );
}

export default App;
