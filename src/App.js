import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from './components/Header'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className='container' id="container">
      <Header/>
      <Contact/>
      <Footer/>
    </div>
  );

}

export default App;
