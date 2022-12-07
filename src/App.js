import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from './components/Header'
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  return (
    <div className='container' id="container">
      <Header/>
      <Home/>
      <Contact/>
      <Footer/>
    </div>
  );

}

export default App;
