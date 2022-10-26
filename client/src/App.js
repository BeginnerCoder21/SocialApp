import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>
      {/* <h1>Hello</h1> */}
        <nav>
          <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/register" element={<Register/>} exact/>
          <Route path="/login" element={<Login/>} exact/>
        </Routes>
        </nav>
      </div>
    </Router>
  );
}


export default App;
