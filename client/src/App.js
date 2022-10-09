import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
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
          <Route path="/" element={<Home />} exact />
          <Route path="/register" exact element={<Register/>}  />
          <Route path="/login" exact element={<Login/>}  />
        </Routes>
        </nav>

        
      </div>
    </Router>
  );
}


export default App;
