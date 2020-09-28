import React from 'react';

import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
