import './App.css';
import Header from './components/Header'
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  return (
    <div id ="content">
      <Header />
      <div className = "container">
        <Home />
        <Contact />
      </div>
      <Footer/>
    </div>
  );

}

export default App;
