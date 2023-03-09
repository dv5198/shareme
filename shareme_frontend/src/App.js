import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
function App() {
  return (
    <Routes>
      <Route path="login/" element={<Login />} />
      <Route path="/*" element={<Home />} />
      {/* <Route path="login/" element={<Login />} />
      <Route path="login/" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
