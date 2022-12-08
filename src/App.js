import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import NotFound from './components/404';
import Footer from './components/Footer';

function App() {

  return (
    <div id ="content">
      <Router>
      <Header />
      <div className = "container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
      </Router>
      <Footer/>
    </div>
  );

}

export default App;
