import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Manubar from './Compunents/Manubar/Manubar';
import Home from './Compunents/Home/Home';
import Footer from './Compunents/Footer/Footer';
import About from './Compunents/About/About';
import GetInvolved from './Compunents/GetInvolved/GetInvolved';
import Students from './Compunents/Students/Students';
import News from './Compunents/News/News';
import NotFound from './Compunents/NotFound/NotFound';
import NavEvent from './Compunents/NavEvent/NavEvent';


function App() {
  return (
    <div className="App">
      <Router>
        <Manubar></Manubar>
        <Switch>]
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/get-involved">
            <GetInvolved></GetInvolved>
          </Route>
          <Route path="/students">
            <Students></Students>
          </Route>
          <Route path="/events">
            <NavEvent></NavEvent>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>



    </div >
  );
}

export default App;
