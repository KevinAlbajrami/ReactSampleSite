import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Header';
import Footer from './components/Footer';
class App extends Component {
  render(){
  return (
    
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
  }
}

export default App;
