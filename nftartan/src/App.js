import React from 'react'
import Navbar from './components/Navbar'
import Display from './pages/Display'
import './App.css'

function App() {
  return (
    <div>
      <div className="navbar-top">
        <Navbar />
      </div>
      <Display />
    </div>
  );
}

export default App;
