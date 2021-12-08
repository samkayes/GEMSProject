import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Employee from './pages/Employees';
import Addemployee from './pages/Addemployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Employee/>}/>
        <Route exact path="/add-employee" element={<Addemployee/>}/>
      </Routes>
    </Router>
  );
}

export default App;
