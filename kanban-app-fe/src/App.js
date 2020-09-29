import React from 'react';

import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Layout/Header';
import AddProject from './Components/Project/AddProject';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/AddProject" component={AddProject} />
      </div>
    </Router>
  );
}

export default App;
