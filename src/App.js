import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  return (
    <div id ="content">
      <Header />
      <Router>
      <div className = "container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      </Router>
      <Footer/>
    </div>
  );

}

export default App;
