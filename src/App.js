import React from 'react';
import logo from './logo.svg';
import './App.css';
import Manubar from './Compunents/Manubar/Manubar';
import Home from './Compunents/Home/Home';
import Footer from './Compunents/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Manubar></Manubar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
