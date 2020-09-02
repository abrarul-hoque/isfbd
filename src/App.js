import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Manubar from './Compunents/Manubar/Manubar';
import Home from './Compunents/Home/Home';
import Footer from './Compunents/Footer/Footer';
import About from './Compunents/About/About';
import NotFound from './Compunents/NotFound/NotFound';
import Team from './Compunents/Team/Team';
import Scholarship from './Compunents/Scholarship/Scholarship';
import Representative from './Compunents/Representative/Representative';
import PostScholarship from './Compunents/PostScholarship/PostScholarship';


function App() {
  return (
    <div className="App">
      <Router>
        <Manubar></Manubar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/team">
            <Team></Team>
          </Route>
          <Route path="/scholarship">
            <Scholarship></Scholarship>
          </Route>
          <Route path="/representative">
            {/* <Representative></Representative> */}
          </Route>
          <Route path="/registration">
            <NotFound></NotFound>
          </Route>
          <Route path="/post-scholarship">
            <PostScholarship></PostScholarship>
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
