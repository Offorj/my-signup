import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import HomePage from './components/Homepage';
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
    </>
  );
}

export default App;
